import { styled } from "nativewind";
import { View, Text } from "react-native";

const ViewStyled = styled(View);
const TextStyled = styled(Text);

export const Home = () => {
  return (
    <ViewStyled className="h-screen flex items-center justify-center">
      <TextStyled className="text-4xl font-bold">Home</TextStyled>
    </ViewStyled>
  );
};
