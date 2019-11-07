import * as React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import faker from "faker";
import { Ionicons } from "@expo/vector-icons";
import { Card, CardItem, Body } from "react-native-paper";
import Constants from "expo-constants";
import { createStackNavigator } from "react-navigation-stack";

export default class MainPage extends React.Component {
  static navigationOptions = {
    title: "Notice",
    headerStyle: {
      backgroundColor: "#F5D0A9"
    },
    headerTintColor: "black",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return (
      <ScrollView alwaysBounceVertical={true}>
        <View style={styles.container}>
          <Text style={styles.name}>{faker.name.firstName()}님</Text>
          <Text
            style={styles.whatuneed}
          >{`오늘은 어떤일이 \n필요하신가요?`}</Text>
          <Text style={styles.tag}>최근 조회목록</Text>
          <Card></Card>
          <ScrollView alwaysBounceHorizontal={true}></ScrollView>
          <Text style={styles.tag}>알바 리스트</Text>
          <Card></Card>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#F5D0A9",
    padding: 8
    // paddingLeft: 20
  },
  name: {
    flex: 0,
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    paddingLeft: 20
  },
  whatuneed: {
    marginTop: 15,
    fontSize: 20,
    paddingLeft: 20
  },
  tag: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 25,
    fontWeight: "bold",
    paddingLeft: 20
  },
  cardradius: {
    // width: 300,
    // height: 300,
    //Below lines will help to set the border radius
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: "hidden"
  }
});
