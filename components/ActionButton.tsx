import { TouchableOpacity, Image, ImageSourcePropType, ViewStyle, StyleSheet } from 'react-native';
import React from 'react';
import customStyles from '../style/customStyles';

interface Props {
  onPress: () => void;
  image: ImageSourcePropType;
  containerStyle?: ViewStyle;
}

const { background, black } = customStyles;

const ActionButton = ({ image, onPress, containerStyle }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.mainStyle, containerStyle]}>
      <Image
        source={image}
        style={{
          width: 30,
          height: 30,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainStyle: {
    width: 50,
    height: 50,
    backgroundColor: background,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 4,
    shadowColor: black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
});

export default ActionButton;
