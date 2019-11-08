import React, { Component } from "react";
import {
  Button,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class UploadSecond extends Component {
  state = {
    address: ""
  };
  onChangeText = async (text) => {
    this.setState({ address: text });
  };

  render() {
    return (
      <ScrollView style={{ paddingLeft: 20, paddingTop: 30, paddingRight: 20 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 30
          }}
        >
          어디서 일하는지 알려좀 주쇼
        </Text>

        {}
        <TextInput
          style={{
            height: 40,
            borderWidth: 1,
            borderRadius: 10,
            marginBottom: 20
          }}
          multiline
          keyboardType="default"
          onChangeText={(text) => this.onChangeText(text)}
        />

        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            if (this.state.address == "") {
              alert("알려좀주쇼");
            } else {
              this.props.navigation.navigate("UploadThird");
            }
          }}
        >
          <Text style={styles.buttonText}>다음 </Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
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
  }
});
