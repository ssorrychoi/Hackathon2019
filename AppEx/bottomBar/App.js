//Stack Navigator
import React from "react";
import { StackNavigator } from "react-navigation";
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation-stack";
import { TextInput } from "react-native";

import ScreenOne from "./Screens/ScreenOne";
import ScreenTwo from "./Screens/ScreenTwo";
import ScreenThree from "./Screens/ScreenThree";
import TypePhone from "./Screens/TypePhone";
import BottomTabNav from "./BottomTabNav";

// const AppStack = createStackNavigator({
//   ScreenOne: ScreenOne,
//   ScreenTwo: ScreenTwo,
//   ScreenThree: ScreenThree
// });

const App = StackNavigator({
  ScreenOne: ScreenOne,
  ScreenTwo: ScreenTwo,
  ScreenThree: ScreenThree,
  TypePhone: TypePhone,
  BottomTabNav: BottomTabNav
});

export default App;
