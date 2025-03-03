import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodoListScreen from './src/screens/TodoListScreen'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <View>
      <Provider store={store}>
     <TodoListScreen/>
     </Provider>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})