import { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  icon?: ReactNode;
  option: "PRIMARY" | "SECUNDARY";
};

export function Button({ title, icon, option, ...rest }: Props) {
  return (
    <Container option={option} {...rest}>
      {icon}
      <Title option={option}>{title}</Title>
    </Container>
  );
}
