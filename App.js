import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import Learneditem from "./components/Learneditem";
import Learnedinput from "./components/Learnedinput";

export default function App() {
  //Store time and date
  const [date, setDate] = useState("");
  //Store input values
  const [iLearned, setIlearned] = useState([]);

  const addLearnHandler = (learned) => {
    /* to use Flatlist comp our list needs to object and key must be in object */
    getDate();
    setIlearned((currentlyLearning) => [
      ...currentlyLearning,
      {
        key: Math.random().toString(),
        value: learned,
        timeDate: date,
      },
    ]);
  };
  const getDate = () => {
    const newDate = new Date();
    const getTime = newDate.getHours() + ":" + newDate.getMinutes();
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    const formatedDate = getTime + " " + day + "-" + month + "-" + year + " ";
    setDate(formatedDate);
  };
  return (
    <View style={styles.screen}>
      <Learnedinput addLearned={addLearnHandler} />
      {/* Use flat list becouse we dont know how long our list will be and we dont want to render 
      full list pede kari
      */}
      {/* render item takes function that is called for everyitem in data to render a list item  */}
      <FlatList
        data={iLearned}
        renderItem={(itemData) => (
          <Learneditem
            text={itemData.item.value}
            date={itemData.item.timeDate}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
