import { View, ViewStyle } from 'react-native';
import React from 'react';
import menu from '../assets/menu.png';
import search from '../assets/search.png';
import customStyles from '../style/customStyles';
import ActionButton from './ActionButton';
import Label from './Label';
import arrow from '../assets/arrow.png';

interface Props {
  title?: string;
  onPressLeft: () => void;
  onPressRight?: () => void;
  withSearch?: boolean;
  back?: boolean;
}

const { background, borderColor, black } = customStyles;

const Header = ({ title, onPressLeft, onPressRight, withSearch = false, back = false }: Props) => {
  const containerStyle: ViewStyle = {
    height: 80,
    backgroundColor: background,
    padding: 20,
    flexDirection: 'row',
    justifyContent: withSearch ? 'space-between' : 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: borderColor,
  };

  return (
    <View style={containerStyle}>
      <ActionButton image={back ? arrow : menu} onPress={onPressLeft} />
      {title && (
        <Label
          text={title}
          bold
          fontSize={25}
          color={black}
          style={{
            marginHorizontal: 20,
          }}
        />
      )}
      {withSearch && onPressRight && <ActionButton image={search} onPress={onPressRight} />}
    </View>
  );
};

export default Header;
