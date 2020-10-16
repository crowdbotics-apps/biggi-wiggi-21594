import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings145853Navigator from '../features/Settings145853/navigator';
import UserProfile145846Navigator from '../features/UserProfile145846/navigator';
import Settings145845Navigator from '../features/Settings145845/navigator';
import Settings145843Navigator from '../features/Settings145843/navigator';
import SignIn2145841Navigator from '../features/SignIn2145841/navigator';
import Settings145825Navigator from '../features/Settings145825/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings145853: { screen: Settings145853Navigator },
UserProfile145846: { screen: UserProfile145846Navigator },
Settings145845: { screen: Settings145845Navigator },
Settings145843: { screen: Settings145843Navigator },
SignIn2145841: { screen: SignIn2145841Navigator },
Settings145825: { screen: Settings145825Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
