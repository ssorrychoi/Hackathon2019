import * as React from "react";
import { Button, View, Text, StyleSheet, StatusBar } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "react-navigation-tabs";

// import HomeScreen from './HOME/HomeScreen';
// import RootStack from './HOME/RootStack';
// import DetailsScreen from './HOME/DetailsScreen';
// import MainPage from './NOTICE/MainPage';
// import NoticeRoot from './NOTICE/NoticeRoot';
// import MyPage from './PERSONAL/MyPage';
// import PersonalRoot from './PERSONAL/PersonalRoot';
// import WorkRoot from './WORK/WorkRoot';

import ScreenOne from "./Screens/ScreenOne";
import ScreenTwo from "./Screens/ScreenTwo";
import ScreenThree from "./Screens/ScreenThree";
import TypePhone from "./Screens/TypePhone";

class App extends React.Component {
  render() {
    return <View style={styles.container} />;
  }
}

const BottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: TypePhone,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
        const iconName = "ios-home";
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      },
      tabBarOptions: {
        //activeTintColor: '#e91e63',
        labelStyle: {
          fontSize: 12
        },
        style: {
          backgroundColor: "#F5D0A9"
        }
      }
    }
  },
  Details: {
    screen: TypePhone,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
        const iconName = `ios-contact`;
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      },
      tabBarOptions: {
        //activeTintColor: '#e91e63',
        labelStyle: {
          fontSize: 12
        },
        style: {
          backgroundColor: "#F5D0A9"
        }
      }
    }
  },
  Notice: {
    screen: TypePhone,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
        const iconName = `ios-information-circle`;
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      },
      tabBarOptions: {
        //activeTintColor: '#e91e63',
        labelStyle: {
          fontSize: 12
        },
        style: {
          backgroundColor: "#F5D0A9"
        }
      }
    }
  },
  MyPage: {
    screen: TypePhone,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
        const iconName = `ios-git-merge`;
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      },
      tabBarOptions: {
        //activeTintColor: '#e91e63',
        labelStyle: {
          fontSize: 12
        },
        style: {
          backgroundColor: "#F5D0A9"
        }
      }
    }
  }
});
export default createAppContainer(BottomTabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
