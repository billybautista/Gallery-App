import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IFavorite {
  image_id: string;
  title: string;
  id: number;
  api_link: string;
  artist_title: string;
}

interface General {
  favorites: IFavorite[];
  setFavorites: React.Dispatch<React.SetStateAction<IFavorite[]>>;
}

const defaultFavorites: General = {
  favorites: [],
  setFavorites: () => {},
};

export const Context = createContext(defaultFavorites);

interface Props {
  children: React.ReactNode;
}

const Provider: React.FC<Props> = ({ children }) => {
  const [favorites, setFavorites] = useState<IFavorite[]>([]);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const favoritesJSON = await AsyncStorage.getItem('favorites');
        if (favoritesJSON) {
          setFavorites(JSON.parse(favoritesJSON));
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    loadFavorites();
  }, []);

  useEffect(() => {
    const saveFavorites = async () => {
      try {
        const timeoutId = setTimeout(async () => {
          await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
        }, 500);

        return () => clearTimeout(timeoutId);
      } catch (error) {
        console.error('Error saving favorites:', error);
      }
    };

    saveFavorites();
  }, [favorites]);

  return <Context.Provider value={{ favorites, setFavorites }}>{children}</Context.Provider>;
};

export default Provider;
