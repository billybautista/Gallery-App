import React from 'react';
import { StyleSheet, View } from 'react-native';
import customStyles from '../style/customStyles';
import Label from './Label';

interface Props {
  title: string;
  description: string | number;
}
const { borderColor, textLight, black } = customStyles;

const SectionItem = ({ title, description }: Props) => {
  return (
    <View style={styles.containerStyle}>
      <Label text={title} fontSize={18} color={black} style={styles.titleStyle} />
      <Label text={description} color={textLight} fontSize={16} style={styles.descriptionStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    paddingVertical: 10,
    borderTopColor: borderColor,
    borderTopWidth: 1,
  },
  titleStyle: {
    paddingBottom: 10,
    fontWeight: '500',
  },
  descriptionStyle: {
    fontWeight: '300',
    color: textLight,
  },
});

export default SectionItem;
