import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../src/login';
import Home from '../src/home';
const AppNavigator = createStackNavigator({
    Login:Login,    
    Home: Home
},
{
    initialRouteName:'Login'
}
);

const RouterConfig = createAppContainer(AppNavigator);
export default RouterConfig;