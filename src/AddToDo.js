import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

export const AddToDo = (props) => {
  return (
    <View style={styles.block}>
      <TextInput style={styles.input} />
      <Button title='Add' />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderBottomColor: 'black',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    padding: 10,
    width: '80%',
  },
});
