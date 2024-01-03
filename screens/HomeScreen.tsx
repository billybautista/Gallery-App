import { StatusBar, FlatList, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useGetArtworks } from '../services/useArtworks';
import LoadingComponent from '../components/Loading';
import Header from '../components/Header';
import ArtworkCard from '../components/ArtworkCard';
import { FIELDS } from '../utils/requests';
import customStyles from '../style/customStyles';
import { HEADERS } from '../utils/mockup';
import { AppRoute } from '../navigation/AppRoute';

interface Props {
  navigation: DrawerNavigationProp<any, any>;
}

const { background, main } = customStyles;

const HomeScreen = ({ navigation }: Props) => {
  const [limit, setLimit] = useState<number>(10);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  const {
    data: artworks,
    isLoading,
    refetch,
  } = useGetArtworks({
    fields: FIELDS,
    page: 1,
    limit: limit,
  });

  const handleLoadMore = async () => {
    setIsLoadingMore(true);
    setLimit(limit + 10);
    await refetch();
    setIsLoadingMore(false);
  };

  const MemoizedArtworkCard = React.memo(ArtworkCard);

  if (isLoading) {
    return <LoadingComponent color={main} />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: background }}>
      <StatusBar barStyle='dark-content' backgroundColor={background} />
      <Header
        title={HEADERS.home}
        onPressLeft={() => navigation.openDrawer()}
        onPressRight={() => navigation.navigate(AppRoute.SEARCH)}
        withSearch
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20 }}
        overScrollMode='never'
        data={artworks}
        renderItem={({ item }) => (
          <MemoizedArtworkCard
            data={item}
            onPress={() => navigation.navigate(AppRoute.ARTWORK_DETAIL, { artworkId: item.id })}
          />
        )}
        keyExtractor={item => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isLoadingMore && (artworks?.length as number) < 100 ? (
            <LoadingComponent
              color='#B50838'
              style={{
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          ) : null
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
