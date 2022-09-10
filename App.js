import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [Goals, setGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const AddGoal = (newGoal) => {
    setGoals([...Goals, {text: newGoal, key: Math.random().toString()}]);
  } 
  const removeGoal = (id) => {
    setGoals(Goals.filter(item => item.key !== id));
  } 
  const ShowModal = (id) => {
    setShowModal(true)
  } 

  const closeModal = () => {
    setShowModal(false);
  }
  
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.container}>
        <Button
          title='ADD NEW GOAL!'
          color="#5e0acc"
          onPress={ShowModal}
        />
        <GoalInput AddGoal={AddGoal} visible={showModal} closeModal={closeModal} />
        <View>
          <Text style={styles.header}> List of Goals!!!!</Text>
          <View style={styles.listView}>
            <FlatList
              data={Goals}
              renderItem={(itemData)=>{
                return (
                  <GoalItem
                    id={itemData.item.key}
                    onDeleteThis={removeGoal}
                    itemData={itemData}
                  />
                )
              }} />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 50,
    backgroundColor: "#1e085a"
  },
  textInput:{
    borderWidth: 1,
    borderColor: "#CCCCCC",
    width: "80%",
    marginRight: 4,
    padding: 10
  },
  header: {
    fontSize: 19,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 40,
    color: "#FFFFFF"
  },
  listView: {
    height: 400,
  },
  test:{
    flexDirection: "row",
    justifyContent: 'space-between'
  }
});
