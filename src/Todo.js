import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const Todo = ({ todo }) => {
  return (
    <View style={styles.todo}>
      <Text>{todo.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    alignItems: 'center',
    borderColor: '#e5e5e5',
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 10,
    padding: 15,
  },
});
