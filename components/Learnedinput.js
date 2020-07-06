import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";

const Learnedinput = (props) => {
  //To get input
  const [learning, setLearning] = useState("");

  const iLearnedInputHandler = (enteredText) => {
    setLearning(enteredText);
  };

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='What i learned to day?'
          style={styles.input}
          onChangeText={iLearnedInputHandler}
          value={learning}
        />
        <Button title='ADD' onPress={props.addLearned.bind(this, learning)} />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: 200,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});
export default Learnedinput;