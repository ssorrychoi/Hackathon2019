import * as React from "react";
import { Button, View, Text, StatusBar } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { createBottomTabNavigator } from "react-navigation-tabs";

import HomeScreen from "./HomeScreen";
import DetailsScreen from "./AnnounceDetail";

const AnnounceRoot = createStackNavigator(
  {
    Home: HomeScreen,
    DetailsPage: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AnnounceRoot);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
