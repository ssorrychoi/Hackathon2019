import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight
} from "react-native";
import { Card, CardItem, Body } from "react-native-paper";
import faker from "faker";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "native-base";

import FarmImg from "./FarmImg";

export default class AnnounceDetail extends React.Component {
  static navigationOptions = {
    title: "상세 내용",
    headerStyle: {
      backgroundColor: "#ffa904"
    },
    // headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return (
      <ScrollView alwaysBounceVertical={true}>
        <View style={{ paddingBottom: 20 }}>
          <Card style={styles.cardST}>
            <FarmImg />
          </Card>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>영찬이네 선과장</Text>
          <View style={{ flexDirection: "row" }}>
            <Ionicons
              name="ios-home"
              style={{ fontSize: 20, color: "#ffa904" }}
            />
            <Text style={styles.info}>주소</Text>
          </View>
          <Text style={styles.detail}>{faker.address.streetAddress()}</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Ionicons
              name="ios-calendar"
              style={{ fontSize: 20, color: "#ffa904" }}
            />
            <Text style={styles.info}>날짜</Text>
          </View>
          <Text style={styles.detail}>2019.01.01 ~ 2020.01.01</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Ionicons
              name="ios-contacts"
              style={{ fontSize: 20, color: "#ffa904" }}
            />
            <Text style={styles.info}>모집인원</Text>
          </View>
          <Text style={styles.detail}>{faker.random.number()}명</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Ionicons
              name="ios-wallet"
              style={{ fontSize: 20, color: "#ffa904" }}
            />
            <Text style={styles.info}>시급</Text>
          </View>
          <Text style={styles.detail}>{faker.random.number()}원</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Ionicons
              name="ios-phone-portrait"
              style={{ fontSize: 20, color: "#ffa904" }}
            />
            <Text style={styles.info}>선과장번호</Text>
          </View>
          <Text style={styles.detail}>{faker.phone.phoneNumber()}</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Ionicons
              name="ios-phone-portrait"
              style={{ fontSize: 20, color: "#ffa904" }}
            />
            <Text style={styles.info}>노동시간</Text>
          </View>
          <Text style={styles.detail}>09:00 ~ 18:00 주6일</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Ionicons
              name="ios-rocket"
              style={{ fontSize: 20, color: "#ffa904" }}
            />
            <Text style={styles.info}>평점</Text>
          </View>
          <View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Ionicons
                name="ios-star"
                style={{ fontSize: 25, color: "#ffa904" }}
              />
              <Ionicons
                name="ios-star"
                style={{ fontSize: 25, color: "#ffa904" }}
              />
              <Ionicons
                name="ios-star"
                style={{ fontSize: 25, color: "#ffa904" }}
              />
              <Ionicons
                name="ios-star-half"
                style={{ fontSize: 25, color: "#ffa904" }}
              />
              <Ionicons
                name="ios-star-outline"
                style={{ fontSize: 25, color: "#ffa904" }}
              />
            </View>
          </View>
          <View style={{ paddingTop: 10, paddingBottom: 10 }}>
            <TouchableHighlight
              onPress={() =>
                this.props.navigation.navigate("AnnounceCard", {
                  screen: "AnnounceCard"
                })
              }
              style={styles.button}
            >
              <Text style={styles.buttonText}>지원하기 </Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    paddingTop: 24,
    paddingLeft: 20
  },
  index: {
    fontSize: 14,
    color: "gray",
    paddingBottom: 10
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    paddingBottom: 20,
    paddingTop: 20,
    color: "#ffa904"
  },
  info: {
    color: "#ffa904",
    fontSize: 23,
    paddingLeft: 5
  },
  detail: {
    paddingBottom: 10,
    fontSize: 15
  },
  logo: {
    height: 128,
    width: 128
  },
  button: {
    backgroundColor: "#ffa904",
    alignSelf: "stretch",
    marginRight: 20,
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    alignSelf: "center"
  },
  cardST: {
    width: "100%",
    height: 250,
    //Below lines will help to set the border radius
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 5
  }
});

// <View style={{ flexDirection: "row" }}>
//             <Image
//               style={styles.logo}
//               source={require("../../assets/splash_img.png")}
//             />
//             <Image
//               style={styles.logo}
//               source={require("../../assets/avatar.png")}
//             />
//           </View>
