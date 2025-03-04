import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoListScreen from '../../screens/TodoListScreen';
import CompleteTodoScreen from '../../screens/CompleteTodoScreen';
import AntDesign from "react-native-vector-icons/AntDesign"
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator initialRouteName='todolist'>
            <Tab.Screen
                name="todolist"
                component={TodoListScreen}
                options={{
                    tabBarStyle: { height: 60 },
                    headerShown: false,
                    tabBarInactiveTintColor: "black",
                    tabBarActiveTintColor: "white",
                    tabBarActiveBackgroundColor: "brown",
                    tabBarInactiveBackgroundColor: "white",
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name="home"
                            size={30}
                            color={focused ? "white" : "black"}
                        />
                    ),
                    tabBarLabelStyle: {
                        fontSize: 15,
                        fontWeight: "heavy",
                    },
                }}
            />
            <Tab.Screen
                name="completed"
                component={CompleteTodoScreen}
                options={{
                    tabBarStyle: { height: 60 },
                    headerShown: false,
                    tabBarInactiveTintColor: "black",
                    tabBarActiveTintColor: "white",
                    tabBarActiveBackgroundColor: "brown",
                    tabBarInactiveBackgroundColor: "white",
                    tabBarIcon: ({ focused }) => (
                        <AntDesign
                            name="checkcircle"
                            size={20}
                            color={focused ? "white" : "black"}
                        />
                    ),
                    tabBarLabelStyle: {
                        fontSize: 15,
                        fontWeight: "heavy"
                    }
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabs;
