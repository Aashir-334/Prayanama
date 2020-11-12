import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Signin from '../scenes/signIn/index';
import Signup from '../components/slider/SignUp';
import Selection1 from '../components/slider/From2';
import Selection2 from '../components/slider/From3';
import Paranyama from './app-navigator';
import Exercise from '../scenes/pranayama/exercise';
import WelcomeSplash from '../welcomeSplash/Splash';
// import GetFiery from '../scenes/pranayama/exercise/get fiery';
// import AntiInfla from '../scenes/pranayama/exercise/anti inflammatory';
// import StopProcast from '../scenes/pranayama/exercise/Stop Procastination';
// import BringAwaer from '../scenes/pranayama/exercise/Bring Awaeness';
import Elevate from '../scenes/pranayama/paidExercise/elevate';
import BuildResource from '../scenes/pranayama/paidExercise/Build resource';
import HomeScreen from '../scenes/home/index';

// import SplashScreen from "../scenes/splash/index";

export const RootStack = createStackNavigator(
  {
    // Signin,
    // Signup,
    Paranyama,
    Selection1,
    Selection2,
    Exercise,
    WelcomeSplash,
    // GetFiery,
    // AntiInfla,
    // StopProcast,
    // BringAwaer,
    Elevate,
    BuildResource,
    HomeScreen,
    // SplashScreen
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
      header: null,
      headerForceInset: {top: 'never', bottom: 'never'},
    },
  },
);
// const Drawer = createDrawerNavigator(
//   {
//     Map
//   },
//   {
//     headerModer: 'none',

//   },
// );
// export default createAppContainer(AppNavigator);
