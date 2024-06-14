import React, { useState } from "react";
import { Button, View, TextInput, ScrollView } from "react-native";
import Todo from "./Todo.tsx";

export default function Index() {
  const [todoItems, setTodoItems] = useState([
    { task: "Aller courir", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    setTodoItems([...todoItems, { task: newTodo, completed: false }]);
    setNewTodo("");
  };

  const toggleTodo = (index) => {
    const newTodos = [...todoItems];
    newTodos[index].completed = !newTodos[index].completed;
    setTodoItems(newTodos);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ScrollView style={{ width: "80%", paddingTop: 24 }}>
        {todoItems.map((item, index) => (
          <Todo
            key={index}
            task={item.task}
            completed={item.completed}
            onPress={() => toggleTodo(index)}
          />
        ))}
      </ScrollView>
      <TextInput
        style={{
          borderWidth: 1,
          padding: 10,
          marginTop: 20,
          marginBottom: 20,
          width: "80%",
        }}
        placeholder="Ajouter une tache..."
        value={newTodo}
        onChangeText={(text) => setNewTodo(text)}
      />
      <Button title="Ajouter" onPress={addTodo} />
    </View>
  );
}
