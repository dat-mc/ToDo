import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

export const AddToDo = ({ onSubmit }) => {
  const pressHandler = () => {
    onSubmit('just test');
  };

  return (
    <View style={styles.block}>
      <TextInput style={styles.input} />
      <Button title='Add' onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    borderBottomColor: 'black',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    padding: 10,
    width: '80%',
  },
});
