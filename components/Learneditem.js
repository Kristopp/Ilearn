import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";

const Learneditem = (props) => {
  return (
    //i use bind to delete items by id
    <TouchableNativeFeedback onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        {/* item is data object item.value is way to access */}
        <Text> {props.text} </Text>
        <Text> {props.date} </Text>
      </View>
    </TouchableNativeFeedback>
  );
};
const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
export default Learneditem;
