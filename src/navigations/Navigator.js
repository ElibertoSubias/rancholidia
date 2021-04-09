import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Edit from '../screens/Edit';
import Home from '../screens/Home';
import Main from '../screens/Main';

const stackNavigatorOptions = {
    headerShown: false
}

const AppNavigator = createStackNavigator({
    Login: {screen:Login},
    Register: {screen:Register},
    Edit: {screen:Edit},
    Home: {screen: Home},
    Main: {screen: Main},
},
{
    defaultNavigationOptions : stackNavigatorOptions
}
);
export default createAppContainer(AppNavigator);

// DeCode with Minte