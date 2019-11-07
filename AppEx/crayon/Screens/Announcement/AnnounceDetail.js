import * as React from "react";
import { Button, View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

export default class AnnounceDetail extends React.Component {
  static navigationOptions = {
    title: "Detail Screen",
    headerStyle: {
      backgroundColor: "#F5D0A9"
    },
    //headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F5D0A9"
        }}
      >
        <Text>Details Screen</Text>
      </View>
    );
  }
}
