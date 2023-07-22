import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { Form } from "../../components/Form";

export default function Login() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard}>
      <KeyboardAvoidingView behavior="position">
        <>
          <Form />
        </>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
