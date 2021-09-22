import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';

export const AddToDo = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    } else {
      Alert.alert('ToDo title is empty!');
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        autoCorrect={false}
        onChangeText={setValue}
        placeholder='Enter title of ToDo...'
        style={styles.input}
        value={value}
      />
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
