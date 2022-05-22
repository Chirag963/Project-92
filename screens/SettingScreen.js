import React, {Component} from "react";
import {
  View,
  Text,
  StyleSheet
  } 
  from "react-native";

  export default class SettingScreen extends Component{
    render() {
      return(
        <View style={styles.container}>
        <Text styles={styles.Text}>Setting Screen</Text>
        </View>
      );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
text: {
  color: "#ffff",
  fontSize: 30,

}
});