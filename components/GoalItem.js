import { Pressable, StyleSheet,View,Text } from "react-native";

const GoalInput = (props) => {
    return ( 
        <Pressable onPress={()=>props.onDeleteThis(props.id)}>
          <View style={styles.goal}>
            <Text style={styles.goalText}>
              {props.itemData.item.text} 
            </Text>
          </View>
        </Pressable>
     );
}
 
export default GoalInput;

const styles = StyleSheet.create({
    goal: {
      backgroundColor:"black",
      borderRadius: 6,
      padding: 20,
      marginBottom: 14,
    },
    goalText: {
      textAlign: 'center',
      color: "white",
      fontSize: 14,
    },
});