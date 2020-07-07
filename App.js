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
    //Check for empty input
    if (iLearned.length === 0) {
      return;
    }
    /* to use Flatlist comp our list needs to be a object and key must be inside object */
    setDate(getDate);
    setIlearned((currentlyLearning) => [
      ...currentlyLearning,
      {
        id: Math.random().toString(),
        value: learned,
        timeDate: date,
      },
    ]);
    setModal(false);
  };
  //LearnedId is the id onCliked element and thats the one we filter from array
  const deletLearned = (learnedId) => {
    //currntL is my current state copy
    setIlearned((currentlyLearning) => {
      return currentlyLearning.filter((itemI) => itemI.id !== learnedId);
    });
  };

  const cancelAddLearning = () => {
    setModal(false);
  };
  const getDate = () => {
    const newDate = new Date();
    const getTime = newDate.getHours() + ":" + newDate.getMinutes();
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    const formatedDate = getTime + " " + day + "-" + month + "-" + year + " ";
    return formatedDate;
  };
  return (
    <View style={styles.screen}>
      <Learnedinput
        addLearned={addLearnHandler}
        visible={modalState}
        cancelModal={cancelAddLearning}
      />
      {/* Use flat list becouse we dont know how long our list will be and we dont want to render 
      full list pede kari
      */}
      {/* render item takes function that is called for everyitem in data to render a list item  */}
      <Button
        title='Rember what i learned'
        onPress={() => setModal(true)}></Button>
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
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
