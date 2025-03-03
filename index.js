/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { Store } from './store';
import TodoListScreen from './src/screens/TodoListScreen';
<Provider store={Store}>
    
    <TodoListScreen/>

</Provider>
AppRegistry.registerComponent(appName, () => App);
