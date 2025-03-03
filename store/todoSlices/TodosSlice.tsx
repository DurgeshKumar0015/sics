import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const TodosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [ 
      {
        id: "",
        title: "", 
        completed: false,
      }
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now().toString(),
        title: action.payload, 
        completed: false,
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo: (state, action) => {
      const { id, newTitle } = action.payload; 
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.title = newTitle; 
      }
    },
  
  },
});

export const { addTodo, removeTodo, toggleTodo, editTodo } = TodosSlice.actions;

export default TodosSlice.reducer;

const styles = StyleSheet.create({});
