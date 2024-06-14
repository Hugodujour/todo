import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Checkbox from "./Checkbox.tsx";

const Todo = ({ task, completed, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
      >
        <Checkbox checked={completed} />
        <Text
          style={{
            fontSize: 20,
            textDecorationLine: completed ? "line-through" : "none",
          }}
        >
          {task}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Todo;
