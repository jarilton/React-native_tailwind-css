import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { Form } from "../../components/Form";
import { styled } from "nativewind";

const ViewStyled = styled(View);

export default function Login() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ViewStyled className={"flex-1"}>
        <Form />
      </ViewStyled>
    </TouchableWithoutFeedback>
  );
}
