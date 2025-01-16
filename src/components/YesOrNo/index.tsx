import { TouchableOpacityProps } from "react-native";
import { Container, Option, Circle } from "./styles";

type Props = TouchableOpacityProps & {
  option: "Sim" | "Não";
  isSelected: boolean;
};

export function YesOrNo({ option, isSelected, ...rest }: Props) {
  return (
    <Container isSelected={isSelected} option={option} {...rest}>
      <Circle option={option} />
      <Option>{option}</Option>
    </Container>
  );
}
