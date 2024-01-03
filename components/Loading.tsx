import { View, ActivityIndicator, StyleSheet, ViewProps } from 'react-native';
import React from 'react';
import customStyles from '../style/customStyles';

interface Props extends ViewProps {
  color?: string;
}

const { background } = customStyles;

const LoadingComponent = ({ color, ...otherProps }: Props) => {
  return (
    <View style={styles.wrapper} {...otherProps}>
      <ActivityIndicator size='large' color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoadingComponent;
