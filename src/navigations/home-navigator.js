import { createStackNavigator } from "react-navigation-stack";
import HomeScreen  from "../scenes/home/index";

const HomeNavigatorConfig = {
    initialRouteName: 'Home',
    header: null,
    headerMode: 'none'
};

const RouteConfigs = {
    Home: HomeScreen
};

const HomeNavigator = createStackNavigator(RouteConfigs, HomeNavigatorConfig);

export default HomeNavigator;