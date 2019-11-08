import * as React from "react";
import { Button, View, Text, StatusBar } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { createBottomTabNavigator } from "react-navigation-tabs";

import UploadMain from "./UploadMain";
import UploadSecond from "./UploadSecond";
import UploadThird from "./UploadThird";

const UploadRoot = createStackNavigator(
  {
    UploadMain: UploadMain,
    UploadSecond: UploadSecond,
    UploadThird: UploadThird
  },
  {
    initialRouteName: "UploadMain"
  }
);

const AppContainer = createAppContainer(UploadRoot);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
