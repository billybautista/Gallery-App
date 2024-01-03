import { StatusBar, FlatList, SafeAreaView } from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../hooks/context';
import ArtworkCard from '../components/ArtworkCard';
import Header from '../components/Header';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import EmptyState from '../components/EmptyState';
import { EMPTY_MESSAGE, HEADERS } from '../utils/mockup';
import customStyles from '../style/customStyles';
import { AppRoute } from '../navigation/AppRoute';

interface Props {
  navigation: DrawerNavigationProp<any, any>;
}

const { background, padding } = customStyles;

const FavoriteScreen = ({ navigation }: Props) => {
  const { favorites } = useContext(Context);

  const MemoizedArtworkCard = React.memo(ArtworkCard);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: background }}>
      <StatusBar barStyle='dark-content' backgroundColor={background} />

      <Header title={HEADERS.favorite} onPressLeft={() => navigation.openDrawer()} />

      <FlatList
        contentContainerStyle={{ padding: padding }}
        overScrollMode='never'
        data={favorites}
        renderItem={({ item }) => (
          <MemoizedArtworkCard
            data={item}
            onPress={() => navigation.navigate(AppRoute.ARTWORK_DETAIL, { artworkId: item.id })}
          />
        )}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={<EmptyState title={EMPTY_MESSAGE.favorite} />}
      />
    </SafeAreaView>
  );
};

export default FavoriteScreen;
