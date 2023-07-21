import React from "react";
import { View, Button, TextInput } from "react-native";

export function Form() {
  return (
    <View>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Senha" />
      <Button title="Login" />
    </View>
  );
}
