import { View, ViewStyle, useWindowDimensions } from 'react-native';
import React from 'react';
import customStyles from '../style/customStyles';
import Label from './Label';

const { background, black } = customStyles;

interface Props {
  color?: string;
  title: string;
  percentage?: number;
}

const EmptyState = ({ color, title, percentage }: Props) => {
  const { height } = useWindowDimensions();

  const containerStyle: ViewStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color || background,
    height: height - height * (percentage || 0.3),
  };

  return (
    <View style={containerStyle}>
      <Label text={title} fontSize={18} color={black} />
    </View>
  );
};

export default EmptyState;
