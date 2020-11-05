import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';

import CustomSideBarMenu  from './CustomSideBarMenu';
import SettingScreen from './settings';
import {Icon} from 'react-native-elements';
export const AppDrawerNavigator = createDrawerNavigator(
   {
  
   Settings:{screen:SettingScreen},
  
 },
 {
        contentComponent: CustomSideBarMenu
    },
)
