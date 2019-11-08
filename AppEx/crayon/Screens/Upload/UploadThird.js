import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  DatePickerIOS,
  NativeModules,
  LayoutAnimation,
  Alert
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
const { UIManager } = NativeModules;

export default class UploadThird extends Component {
  constructor(props) {
    super(props);
    this.state = {
      howManyMember: 0,
      howMuchPay: 0,
      StartTime: new Date(),
      EndTime: new Date(),
      h1: 0,
      h2: 0,
      flag1: true,
      flag2: true,
      addition: ""
    };
    this.setStartWorkTime = this.setStartWorkTime.bind(this);
    this.setEndWorkTime = this.setEndWorkTime.bind(this);
  }
  setStartWorkTime = (newDate) => {
    this.setState({ StartTime: newDate });
    console.log(newDate);
  };
  setEndWorkTime = (newDate) => {
    this.setState({ EndTime: newDate });
    console.log(newDate);
  };

  reward = async (howMuchPay) => {
    this.setState({ howMuchPay: howMuchPay });
  };

  plus = () => {
    this.setState({
      howManyMember: parseInt(this.state.howManyMember) + 1
    });
  };
  minus = () => {
    this.setState({
      howManyMember: parseInt(this.state.howManyMember) - 1
    });
  };

  addition = async (text) => {
    this.setState({ addition: text });
  };

  showStartWorkTime = async () => {
    LayoutAnimation.spring();
    await this.setState({
      flag1: !this.state.flag1
    });
    await this.setState({ h1: this.state.flag1 ? 0 : null });
  };

  showEndWorkTime = async () => {
    LayoutAnimation.spring();
    await this.setState({
      flag2: !this.state.flag2
    });
    await this.setState({ h2: this.state.flag2 ? 0 : null });
  };

  render() {
    return (
      <ScrollView style={{ paddingLeft: 20, paddingTop: 30, paddingRight: 20 }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            marginBottom: 30
          }}
        >
          인원과 시급, 근무시간을 알려주세요
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20
          }}
        >
          <Text
            style={{
              flex: 3,
              fontSize: 15
            }}
          >
            인원
          </Text>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-between"
            }}
          >
            <TouchableOpacity onPress={this.minus}>
              <Image
                source={require("../../assets/minus.png")}
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
            <Text>{this.state.howManyMember}명</Text>
            <TouchableOpacity onPress={this.plus}>
              <Image
                source={require("../../assets/plus.png")}
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20
          }}
        >
          <Text
            style={{
              flex: 3,
              fontSize: 15
            }}
          >
            시급
          </Text>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-between"
            }}
          >
            <TextInput
              style={{
                width: 50,
                justifyContent: "flex-end"
              }}
              keyboardType="number-pad"
              placeholder="시급입력"
              placeholderTextColor="gray"
              onChangeText={(text) => this.reward(text)}
            />
            <Text>원</Text>
          </View>
        </View>

        <View style={{ marginVertical: 10 }}>
          <TouchableHighlight
            onPress={() => {
              this.showStartWorkTime(true);
            }}
          >
            <View>
              <Text style={{ fontSize: 15 }}>시작시각</Text>
            </View>
          </TouchableHighlight>
          <DatePickerIOS
            date={this.state.StartTime}
            onDateChange={this.setStartWorkTime}
            mode="time"
            style={{
              backgroundColor: "grey",
              height: this.state.h1,
              opacity: !this.state.flag1 ? 100 : 0
            }}
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <TouchableHighlight
            onPress={() => {
              this.showEndWorkTime(true);
            }}
          >
            <View>
              <Text style={{ fontSize: 15 }}>시작시각</Text>
            </View>
          </TouchableHighlight>
          <DatePickerIOS
            date={this.state.EndTime}
            onDateChange={this.setEndWorkTime}
            mode="time"
            style={{
              backgroundColor: "grey",
              height: this.state.h2,
              opacity: !this.state.flag2 ? 100 : 0
            }}
          />
        </View>

        <View>
          <Text style={{ paddingTop: 10 }}>추가 사항</Text>
          <TextInput
            style={{
              height: 120,
              borderWidth: 1,
              borderStartColor: "gray",
              borderRadius: 10
            }}
            keyboardType="default"
            onChangeText={(text) => this.addition(text)}
          />
          <View
            style={{
              borderBottomColor: "gray",
              marginVertical: 10,
              borderBottomWidth: 1
            }}
          />
        </View>

        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            Alert.alert(
              "구인 공고를 등록할까요?",
              "등록후, 수정할 수 없으니 꼼꼼히 확인 부탁~!!",
              [
                {
                  text: "Cancel",
                  onPress: () => alert("%~"),
                  style: "cancel"
                },
                { text: "OK", onPress: () => alert("OK") }
              ],
              { cancelable: false }
            );
          }}
        >
          <Text style={styles.buttonText}>공고등록 </Text>
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
