import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({AddGoal,visible,closeModal}) => {
    const [newGoal, setNewGoal] = useState("");
    const handleChange = (enteredText) => {
      setNewGoal(enteredText);
    }
    return ( 
      <Modal visible={visible} animationType="slide" >
        <View style={styles.top}>
            <Image
                source={require("../assets/images/goal.png")}
                style={styles.Image}
            />
            <TextInput value={newGoal} placeholder='your course goal!' style={styles.textInput} onChangeText={handleChange} />
            <View style={styles.buttonContainer}>
                <View style={{marginRight: 20}}>
                    <Button title='Add Goal' style={{width: 20}} onPress={()=> {AddGoal(newGoal); setNewGoal("")}} color="#b180f0" />
                </View>
                <Button title='Cancel' style={{width: 20}} onPress={closeModal} color="#f31282"/>

            </View>
        </View>
      </Modal>
     );
}
 
export default GoalInput;

const styles = StyleSheet.create({
  textInput:{
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    marginRight: 4,
    padding: 16,
    color: "#120438",
    borderRadius: 6
  },
  top: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#311b6b',
    height: "100%"
  },
  buttonContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 15
  },
  Image: {
    width: 100,
    height: 100,
    margin: 20,
    
  }
});