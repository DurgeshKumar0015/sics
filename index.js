/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import  Store  from './store';
import TodoListScreen from './src/screens/TodoListScreen';
const Root = () => {
    return (
        <Provider store={Store}>

            <App />

        </Provider>
    )

}

AppRegistry.registerComponent(appName, () => Root);
