import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { styled } from "nativewind";

const ViewStyled = styled(View);
const TextStyled = styled(Text);
const TextInputStyled = styled(TextInput);
const ButtonStyled = styled(TouchableOpacity);
const ImageStyled = styled(Image);

export const Form = () => {
  return (
    <ViewStyled className={"h-full items-center justify-center"}>
      <ImageStyled
        className="w-[70px] h-[90px]"
        source={require("../../assets/logo.png")}
      />
      <StatusBar style="auto" />
      <TextStyled className="font-bold text-[23px] mt-5">
        Sejam Bem Vindos
      </TextStyled>
      <TextStyled className="text-[13px] text-gray-400">
        Faça login para continuar
      </TextStyled>
      <TextInputStyled
        placeholder="Email"
        placeholderTextColor={"gray"}
        className={
          "w-[90%] border-2 bg-gray-100 mt-[30px] pl-[10px] h-10 rounded-md"
        }
      />
      <TextInputStyled
        placeholder="Senha"
        placeholderTextColor={"gray"}
        className={
          "w-[90%] border-2 bg-gray-100 mt-[30px] pl-[10px] h-10 rounded-md"
        }
      />
      <ButtonStyled activeOpacity={0.6} className={"self-end mr-5 mt-2"}>
        <TextStyled className="text-blue-800">Esqueceu a senha?</TextStyled>
      </ButtonStyled>
      <ButtonStyled
        activeOpacity={0.6}
        className={
          "bg-green-700 w-[90%] h-10 items-center justify-center rounded-lg mt-5"
        }
      >
        <TextStyled className="text-white">Acessar</TextStyled>
      </ButtonStyled>
      <ViewStyled className={"flex flex-row mt-5"}>
        <TextStyled className="text-gray-900">Não tem uma conta?</TextStyled>
        <ButtonStyled activeOpacity={0.6} className={"ml-2"}>
          <TextStyled className="text-blue-800">Cadastre-se</TextStyled>
        </ButtonStyled>
      </ViewStyled>
    </ViewStyled>
  );
};
