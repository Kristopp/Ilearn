import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Learneditem = (props) => {
  return (
    <View style={styles.listItem}>
      {" "}
      {/* item is data object item.value is vay to access */}{" "}
      <Text> {props.text} </Text> <Text> {props.date} </Text>{" "}
    </View>
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
