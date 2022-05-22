import React, {Component} from 'react';
import BottomTabNavigator from "./navigation/BottomTabNavigator.js";

import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreen";

export default class App extends Component() {

  render() {
  return <BottomTabNavigator/>;
  }
}

