import React from "react";
import { View, StyleSheet } from "react-native";

const Checkbox = ({ checked }) => {
  return (
    <View style={[styles.checkbox, checked && styles.checked]}>
      {checked && <View />}
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "black",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  checked: {
    backgroundColor: "black",
  },
});

export default Checkbox;
