import { configureStore } from '@reduxjs/toolkit';
import TodosSlice from './todoSlices/TodosSlice';
// import TodoListScreen from '../src/screens/TodoListScreen';

const store = configureStore({
  reducer: {
    todos:TodosSlice
  },
});

export default store;
