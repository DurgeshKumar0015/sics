import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/LoginScreen';
import TodoListScreen from '../../screens/TodoListScreen';
import BottamTabs from './BottamTabNavigation';

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='login'>
            <Stack.Screen name="login" component={LoginScreen} 
            options={{
                headerShown:false
            }}/>
            <Stack.Screen name="home" component={BottamTabs} 
            options={{
                headerShown:false
            }}/>

        </Stack.Navigator>

    )
}

export default StackNavigation