import React from 'react';
import { View, TextInput, useWindowDimensions, ViewStyle, TextStyle } from 'react-native';
import close from '../assets/close.png';
import back from '../assets/arrow.png';
import ActionButton from './ActionButton';
import customStyles from '../style/customStyles';

interface SearchBarProps {
  onPressLeft: () => void;
  onPressRight: () => void;
  onChangeText: (text: string) => void;
  text: string;
  placeholder: string;
  onBlur?: () => void;
}

const { background, borderColor, black } = customStyles;

const SearchBar: React.FC<SearchBarProps> = ({
  onPressLeft,
  onPressRight,
  onChangeText,
  text,
  placeholder,
  onBlur,
}) => {
  const { width } = useWindowDimensions();

  const containerStyle: ViewStyle = {
    height: 80,
    backgroundColor: background,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: borderColor,
  };

  const inputStyle: TextStyle = {
    marginLeft: 10,
    marginRight: 10,
    width: width - 160,
    fontSize: 18,
    color: black,
  };

  return (
    <View style={containerStyle}>
      <ActionButton image={back} onPress={onPressLeft} />
      <TextInput
        onChangeText={onChangeText}
        value={text}
        autoFocus={true}
        placeholder={placeholder}
        onBlur={onBlur}
        autoCapitalize='none'
        placeholderTextColor={black}
        style={inputStyle}
      />
      <ActionButton image={close} onPress={onPressRight} />
    </View>
  );
};

export default SearchBar;
