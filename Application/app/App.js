import React, { Component } from "react";
import { AppRegistry, Dimensions } from "react-native";
import { DrawerNavigator } from "react-navigation";

import SideMenu from "./SideMenu";
import stackNav from "./stackNav";

const drawernav = DrawerNavigator(
  {
    Item1: {
      screen: stackNav
    }
  },
  {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get("window").width - 120
  }
);

AppRegistry.registerComponent("Demo", () => drawernav);
