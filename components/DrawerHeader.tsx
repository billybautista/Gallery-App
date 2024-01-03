import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Label from './Label';
import { PROFILE } from '../utils/mockup';
import customStyles from '../style/customStyles';

const { main, padding } = customStyles;

const CustomDrawerHeader = () => {
  const { name, email, photo } = PROFILE;

  return (
    <View style={styles.container}>
      <Image source={{ uri: photo }} style={styles.image} />
      <View>
        <Label text={name} />
        <Label text={email} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding,
    backgroundColor: main,
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
});

export default CustomDrawerHeader;
