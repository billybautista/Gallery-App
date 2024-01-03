import React from 'react';
import { Share, StyleSheet, TouchableOpacity, View } from 'react-native';
import share from '../assets/share.png';
import favorite from '../assets/favorite.png';
import favorited from '../assets/favorite-fill.png';
import useFavorite from '../hooks/useFavorite';
import { handleShare, handleUrl } from '../utils/mockup';
import customStyles from '../style/customStyles';
import Label from './Label';
import ActionButton from './ActionButton';
import ArtworkImage from './ArtworkImage';

interface ArtworkCardProps {
  data: {
    image_id: string;
    title: string;
    id: number;
    api_link: string;
    artist_title: string;
  };
  onPress: () => void;
}

const ArtworkCard = ({ data, onPress }: ArtworkCardProps) => {
  const { addFavorites, isFavorite, removeFavorite } = useFavorite(data?.id);

  const shareLink = async () => {
    const options = {
      title: 'Share Artwork',
      message: handleShare(data?.title, data?.id),
      url: handleUrl(data?.id),
    };

    try {
      await Share.share(options);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.content}>
        <Label text={data.title} fontSize={18} color={customStyles.black} bold />
        <Label text={data.artist_title} fontSize={16} color={customStyles.textLight} />
      </View>

      {data.image_id && <ArtworkImage imageId={data.image_id} containerStyle={styles.image} />}
      <View style={styles.actionButtonsContainer}>
        <ActionButton
          image={share}
          onPress={shareLink}
          containerStyle={{
            marginRight: 20,
          }}
        />
        {isFavorite ? (
          <ActionButton image={favorited} onPress={() => removeFavorite(data.id)} />
        ) : (
          <ActionButton
            image={favorite}
            onPress={() =>
              addFavorites({
                id: data.id,
                title: data.title,
                api_link: data.api_link,
                artist_title: data.artist_title,
                image_id: data.image_id,
              })
            }
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: customStyles.borderColor,
    borderWidth: 1.6,
    borderRadius: 10,
    marginVertical: 10,
  },
  content: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  image: {
    height: 250,
  },
  actionButtonsContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default ArtworkCard;
