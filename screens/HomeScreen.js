import React, {Component} from "react";
import {
  View,
  Text,
  StyleSheet
  } 
  from "react-native";

  export default class HomeScreen extends Component{
    render() {
      return(
        <View style={styles.container}>
             <Text style={{color: '#888', fontSize: 18}}></Text>
        <Text styles={styles.Text}>Home Screen</Text>
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