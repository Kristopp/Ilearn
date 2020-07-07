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
  const clearInput = () => {
    props.addLearned(learning);
    setLearning("");
  };

  return (
    <Modal visible={props.visible} animationType='slide'>
      {/* //View comp only takes size its children req */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='What i learned to day?'
          style={styles.input}
          onChangeText={iLearnedInputHandler}
          value={learning}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonAdd}>
            <Button title='ADD' onPress={clearInput} />
          </View>
          <View style={styles.buttonCancel}>
            <Button title='cancel' onPress={props.cancelModal}></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  buttonContainer: {
    justifyContent: "center",
    flexDirection: "row",
    width: "70%",
  },
  buttonAdd: {
    width: "35%",
    margin: 5,
  },
  buttonCancel: {
    width: "35%",
    margin: 5,
  },
});
export default Learnedinput;
