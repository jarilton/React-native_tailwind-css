import React from "react";
import { View, Button, Text, TextInput } from "react-native";

export function Form() {
  return (
    <View>
      <Text>Login </Text>
      <Text>Sign to continue</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Senha" />
      <Button title="Login" />
    </View>
  );
}
