import { useContext, useMemo } from 'react';
import { Context } from './context';

const useFavorite = (artworkId?: number) => {
  const { favorites, setFavorites } = useContext(Context);

  const isFavorite = useMemo(() => favorites.some(fav => fav.id === artworkId), [artworkId, favorites]);

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  const addFavorites = ({ id, title, image_id, api_link, artist_title }: IFavorite) => {
    if (isFavorite) {
      removeFavorite(id);
    } else {
      setFavorites([...favorites, { id, title, image_id, api_link, artist_title }]);
    }
  };

  return {
    addFavorites,
    isFavorite,
    removeFavorite,
    favorites,
  };
};

export default useFavorite;
