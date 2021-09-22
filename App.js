import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AddToDo } from './src/AddToDo';
import { Navbar } from './src/Navbar';
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title: title,
    // };

    // setTodos(todos.concat([newTodo]));

    // setTodos((prevTodos) => {
    //   return [...prevTodos, newTodo];
    // });

    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title,
      },
    ]);
  };

  return (
    <View>
      <Navbar title='ToDo App' />
      <View style={styles.container}>
        <AddToDo onSubmit={addTodo} />
        <View>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
