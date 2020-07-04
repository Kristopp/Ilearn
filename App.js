
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  //To get input
  const [learning, setLearning] = useState('');
  //Store time and date
  const [date, setDate] = useState('')
  //Store input values
  const [iLearned, setIlearned] = useState([])
  const iLearnedInputHandler = (enteredText) => { 
    setLearning(enteredText)
  }
  const addLearnHandler = () => { 
    /* to use Flatlist comp our list needs to object and key must be in object */
    getDate();
    setIlearned(currentlyLearning => [...currentlyLearning, 
      { 
         key: Math.random().toString(),
         value: learning,
         timeDate:  date
        }
        ])
  }
  const getDate = () => { 
    const newDate = new Date();
    const getTime = newDate.getHours() + ":" + newDate.getMinutes()
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    const formatedDate = getTime + ' ' + day + '-' + month + '-' + year + ' ';
    setDate(formatedDate);
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder="What i learned to day?" 
        style={styles.input} 
        onChangeText={iLearnedInputHandler}
        value={learning}
        />
      <Button 
        title="ADD" 
         onPress={addLearnHandler}/>
      </View>
      {/* Use flat list becouse we dont know how long our list will be and we dont want to render 
      full list pede kari
      */}
      {/* render item takes function that is called for everyitem in data to render a list item  */}
      <FlatList data={iLearned} renderItem={itemData =>( 
        <View>
          {/* item is data object item.value is vay to access */}
          <Text>{itemData.item.value + ' ' + itemData.item.timeDate}</Text>
        </View>
      )}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50 
  },
  inputContainer: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
   },
   listItem: { 
     marginVertical: 5,
     padding: 10,
     backgroundColor: '#ccc',
     borderColor: 'black',
     borderWidth: 1
   }
});
