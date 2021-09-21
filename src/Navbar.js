import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Navbar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    alignItems: 'center',
    backgroundColor: '#6495ed',
    height: 70,
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});
