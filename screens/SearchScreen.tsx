import React, { useState, useCallback } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import SearchBar from '../components/SearchBar';
import { useSearch } from '../services/useArtworks';
import LoadingComponent from '../components/Loading';
import ArtworkCard from '../components/ArtworkCard';
import EmptyState from '../components/EmptyState';
import { EMPTY_MESSAGE } from '../utils/mockup';
import { AppRoute } from '../navigation/AppRoute';
import { FIELDS_SEARCH } from '../utils/requests';
import customStyles from '../style/customStyles';

interface Props {
  navigation: DrawerNavigationProp<any, any>;
}

const { background, main, padding } = customStyles;

const Search = ({ navigation }: Props) => {
  const [text, onChangeText] = useState<string>('');
  const [artworks, setArtworks] = useState<IArtwork[]>([]);

  const {
    isLoading,
    refetch: search,
    remove: clearSearch,
  } = useSearch(
    {
      q: text,
      fields: FIELDS_SEARCH,
      limit: 10,
      page: 1,
    },
    {
      enabled: false,
      onSuccess(data) {
        setArtworks(data);
      },
    }
  );

  const handleClear = useCallback(() => {
    onChangeText('');
    clearSearch();
    setArtworks([]);
  }, [clearSearch]);

  const handleBlur = () => {
    if (text.trim().length > 0) {
      search();
    } else {
      clearSearch();
      setArtworks([]);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: background }}>
      <SearchBar
        onPressLeft={() => {
          handleClear();
          navigation.goBack();
        }}
        onChangeText={onChangeText}
        text={text}
        placeholder={'Search'}
        onPressRight={handleClear}
        onBlur={handleBlur}
      />
      {isLoading ? (
        <LoadingComponent color={main} />
      ) : (
        <FlatList
          contentContainerStyle={{ padding: padding }}
          overScrollMode='never'
          data={artworks}
          renderItem={({ item }) => (
            <ArtworkCard
              data={item}
              onPress={() => navigation.navigate(AppRoute.ARTWORK_DETAIL, { artworkId: item.id })}
            />
          )}
          ListEmptyComponent={<EmptyState title={EMPTY_MESSAGE.search} />}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
