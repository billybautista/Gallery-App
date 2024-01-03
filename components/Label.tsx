import { Text, TextProps, TextStyle } from 'react-native';
import React from 'react';

interface Props extends TextProps {
  text: string | number;
  color?: string;
  bold?: boolean;
  fontSize?: number;
  style?: TextStyle;
}

const Label = ({ text, color = 'white', fontSize, bold = false, style, ...rest }: Props) => {
  const textStyles: TextStyle = {
    fontSize: fontSize || 14,
    color,
    fontWeight: bold ? 'bold' : 'normal',
  };

  return (
    <Text style={[textStyles, style]} {...rest}>
      {text}
    </Text>
  );
};

export default Label;
