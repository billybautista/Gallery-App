import { View, StatusBar, useWindowDimensions, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';
import { useGetArtwork } from '../services/useArtworks';
import LoadingComponent from '../components/Loading';
import favorite from '../assets/favorite.png';
import favorited from '../assets/favorite-fill.png';
import useFavorite from '../hooks/useFavorite';
import RenderHtml from 'react-native-render-html';
import SectionItem from '../components/SectionItem';
import Header from '../components/Header';
import Label from '../components/Label';
import ArtworkImage from '../components/ArtworkImage';
import customStyles from '../style/customStyles';
import ActionButton from '../components/ActionButton';
import { FIELDS } from '../utils/requests';
import { DETAIL_SCREEN_ITEMS } from '../utils/mockup';

interface Props {
  route: RouteProp<any, any>;
  navigation: DrawerNavigationProp<any, any>;
}

const { black, textLight, main, background } = customStyles;

const ArtworkDetail = ({ route, navigation }: Props) => {
  const { params } = route;

  const { data: artwork, isLoading } = useGetArtwork(
    params?.artworkId,
    { fields: FIELDS },
    { refetchOnMount: true, refetchOnWindowFocus: false }
  );

  const { width, height } = useWindowDimensions();
  const { addFavorites, isFavorite, removeFavorite } = useFavorite(params?.artworkId);

  if (isLoading) return <LoadingComponent color={main} />;

  return (
    <SafeAreaView style={{ backgroundColor: background }}>
      <StatusBar barStyle='dark-content' backgroundColor={background} />
      <Header onPressLeft={() => navigation.goBack()} back />
      <ScrollView
        overScrollMode='never'
        showsVerticalScrollIndicator={false}
        style={{
          height: height - 80,
        }}
      >
        <View>
          {artwork?.image_id && (
            <ArtworkImage imageId={artwork.image_id} containerStyle={{ height: 500, padding: 20 }} />
          )}
          <View style={styles.title}>
            <View
              style={{
                width: '80%',
              }}
            >
              <Label text={artwork?.title as string} fontSize={20} color={black} bold />
            </View>
            {isFavorite ? (
              <ActionButton image={favorited} onPress={() => removeFavorite(artwork?.id as number)} />
            ) : (
              <ActionButton
                image={favorite}
                onPress={() =>
                  addFavorites({
                    id: artwork?.id as number,
                    title: artwork?.title as string,
                    artist_title: artwork?.artist_title as string,
                    image_id: artwork?.image_id as string,
                    api_link: artwork?.api_link as string,
                  })
                }
              />
            )}
          </View>
          <View style={styles.description}>
            <Label text={artwork?.date_display as string} fontSize={16} color={textLight} />
            <Label text={artwork?.artist_title as string} fontSize={16} color={textLight} />

            {artwork?.description && (
              <RenderHtml
                baseStyle={{ fontSize: 16, color: black, textAlign: 'justify' }}
                contentWidth={width}
                source={{ html: `${artwork?.description}` }}
              />
            )}
          </View>
          <View style={styles.items}>
            {DETAIL_SCREEN_ITEMS.map(
              (item, index) =>
                item.value && (
                  <SectionItem
                    key={index}
                    title={item.key}
                    description={artwork?.[item.value as keyof typeof artwork] as string}
                  />
                )
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  description: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  items: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default ArtworkDetail;
