import React, { Component } from "react";
import {
  AsyncStorage,
  Button,
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from "react-native";
import CalendarPicker from "react-native-calendar-picker";

import { ScrollView } from "react-native-gesture-handler";

export default class UploadMain extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    start: "",
    end: ""
  };

  render() {
    const minDate = new Date(2018, 1, 1);
    const maxDate = new Date(2050, 6, 3);

    return (
      <ScrollView style={styles.calendarContainer}>
        <View style={{ paddingTop: 50, paddingLeft: 20 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
            {`일손이 필요한 날짜를 \n선택해주세요.`}
          </Text>
        </View>
        <CalendarPicker
          startFromMonday={false}
          allowRangeSelection={true}
          minDate={minDate}
          maxDate={maxDate}
          weekdays={["일", "월", "화", "수", "목", "금", "토"]}
          months={[
            "1월",
            "2월",
            "3월",
            "4월",
            "5월",
            "6월",
            "7월",
            "8월",
            "9월",
            "10월",
            "11월",
            "12월"
          ]}
          previousTitle="이전"
          nextTitle="다음"
          todayBackgroundColor="#808080"
          selectedDayColor="#000000"
          selectedDayTextColor="#ffffff"
          scaleFactor={375}
          textStyle={{
            // fontFamily: 'NanumGothicCoding.ttf',
            color: "#ffffff",
            fontSize: 17
          }}
          onDateChange={this.onDateChange}
        />

        <View style={{ paddingLeft: 20 }}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("UploadSecond");
            }}
          >
            <Text style={styles.buttonText}>다음 </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    alignSelf: "stretch",
    marginRight: 20,
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    alignSelf: "center"
  },
  calendarContainer: {
    // flex: 1,
    // borderColor: '#000000',
    // borderWidth: 1,
    minHeight: "50%",
    backgroundColor: "#FFA904"
  }
});
