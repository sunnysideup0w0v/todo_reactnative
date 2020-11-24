import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/actions";

const TodoInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const todoItems = useSelector((store) => store.todoReducer);
  let id = todoItems.length + 1;
  const registerTodo = (value, id) => {
    if (value.length > 0) {
      dispatch(addTodo({ id: id, title: value }));
      setValue("");
      id++;
    }
    return;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="What is your todo?"
        value={value}
        onChangeText={(value) => setValue(value)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => registerTodo(value, id)}
      >
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 10,
  },
  input: {
    width: "100%",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#d9d9d9",
    fontSize: 18,
  },
  button: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 20,
    position: "absolute",
    right: 0,
  },
});
