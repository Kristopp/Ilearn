import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import Learneditem from "./components/Learneditem";
import Learnedinput from "./components/Learnedinput";

export default function App() {
  //Store time and date
  const [date, setDate] = useState("");
  //Store input values
  const [iLearned, setIlearned] = useState([]);
  const [modalState, setModal] = useState(false);

  const addLearnHandler = (learned) => {
    /* to use Flatlist comp our list needs to object and key must be in object */
    getDate();
    setIlearned((currentlyLearning) => [
      ...currentlyLearning,
      {
        id: Math.random().toString(),
        value: learned,
        timeDate: date,
      },
    ]);
  };
  //LearnedId is the id onCliked element and thats the one we filter from array
  const deletLearned = (learnedId) => {
    //currntL is my current state copy
    setIlearned((currentlyLearning) => {
      return currentlyLearning.filter((itemI) => itemI.id !== learnedId);
    });
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
      <Learnedinput addLearned={addLearnHandler} visible={modalState} />
      {/* Use flat list becouse we dont know how long our list will be and we dont want to render 
      full list pede kari
      */}
      {/* render item takes function that is called for everyitem in data to render a list item  */}
      <FlatList
        data={iLearned}
        renderItem={(itemData) => (
          <Learneditem
            id={itemData.item.id}
            onDelete={deletLearned}
            text={itemData.item.value}
            date={itemData.item.timeDate}
          />
        )}
      />
      <Button
        title='Rember what i learned'
        onPress={() => setModal(true)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
