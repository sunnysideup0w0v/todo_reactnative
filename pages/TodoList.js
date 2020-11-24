import React from "react";
import { useSelector } from "react-redux";
import TodoInput from "../components/TodoInput";
import TodoItem from "../components/TodoItem";
import { SafeAreaView, Text, StyleSheet, ScrollView } from "react-native";

const TodoList = () => {
  const todoItems = useSelector((store) => store.todoReducer);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>To Dos</Text>
      <TodoInput />
      <ScrollView style={styles.todoList}>
        {todoItems.map((todo) => {
          return <TodoItem key={todo.id} task={todo.title} id={todo.id} />;
        })}
      </ScrollView>
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
    width: "100%",
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 10,
  },
  todoList: {
    width: "100%",
  },
});
