import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "../";
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from "react-native";

const TodoList = ({ navigation }) => {
  const todoItems = useSelector((store) => store.todoReducer);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>TodoApp</Text>
      <Text>You have {todoItems.length} todos Today.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("TodoList")}
      >
        <Text>Go To Check</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    borderColor: "black",
  },
});
