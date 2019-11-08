import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import faker from "faker";

export default class FarmImg extends React.Component {
  static navigationOptions = {
    title: "Notice Detail",
    headerStyle: {
      backgroundColor: "#ffa904"
    },
    headerTintColor: "black",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../assets/avatar.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
    paddingLeft: 20
  },
  logo: {
    width: 128,
    height: 128
  }
});
