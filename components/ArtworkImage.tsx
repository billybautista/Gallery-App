import React from 'react';
import { Image, ImageStyle, StyleSheet, View, ViewStyle } from 'react-native';

interface Props {
  imageId: string;
  imgStyle?: ImageStyle;
  containerStyle?: ViewStyle;
}

const ArtworkImage = React.memo(({ imageId, imgStyle, containerStyle }: Props) => {
  const imageUrl = `https://www.artic.edu/iiif/2/${imageId}/full/500,/0/default.jpg`;

  return (
    <View style={[styles.imageContainer, containerStyle]}>
      <Image resizeMode='contain' source={{ uri: imageUrl, cache: 'default' }} style={[styles.image, imgStyle]} />
    </View>
  );
});

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ArtworkImage;
