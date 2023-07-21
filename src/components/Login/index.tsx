import React from "react";
import { KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";
import { Form } from "../Form";

export default function Login() {
  return (
    <TouchableWithoutFeedback onPress={() => console.log("Clicou")}>
      <KeyboardAvoidingView behavior="position">
        <>
          <Form />
        </>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
