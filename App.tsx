import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodoListScreen from './src/screens/TodoListScreen'
import { Provider } from 'react-redux'
import store from './store'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './src/components/Routes/StackNavigation'

const App = () => {
  return (
     <NavigationContainer>
        <StackNavigation/>
      </NavigationContainer>
    // <TodoListScreen/>
  )
}

export default App

const styles = StyleSheet.create({})