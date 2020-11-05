import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import DonateScreen from './screens/DonateScreen'
import QueryScreen from './screens/QueryScreen'
import {AppDrawerNavigator} from './components/AppDrawerNavigator'

export default function App() {
  return (
    <AppContainer/>
  );
}


const SwitchNavigator = createSwitchNavigator({
   WelcomeScreen:WelcomeScreen,
   DonateScreen:DonateScreen,
   QueryScreen:QueryScreen,
})

const AppContainer = createAppContainer(SwitchNavigator)