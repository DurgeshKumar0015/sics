import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
type TodosType={id:string,
  title:string,
  completed:boolean
}
type StateType={
  todos:TodosType[]
}
const initialState:StateType={todos:[]}
const TodosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now().toString(),
        title: action.payload, 
        completed: false,
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo:TodosType) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo:TodosType) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        
      }
    },
    editTodo: (state, action) => {
      const { id, newTitle } = action.payload; 
      const todo = state.todos.find((todo:TodosType) => todo.id === id);
      if (todo) {
        todo.title = newTitle; 
      }
    },
  
  },
});

export const { addTodo, removeTodo, toggleTodo, editTodo } = TodosSlice.actions;

export default TodosSlice.reducer;

const styles = StyleSheet.create({});
