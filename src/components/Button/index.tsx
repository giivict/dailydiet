import { ReactNode } from "react";
import { Pressable, PressableProps } from "react-native";
import { Container, Title } from "./styles";

type Props = PressableProps & {
  title: string;
  icon?: ReactNode;
  option: "PRIMARY" | "SECUNDARY";
};

export function Button({ title, icon, option, ...rest }: Props) {
  return (
    <Pressable {...rest}>
      {({ pressed }) => (
        <Container option={option} isPressed={pressed}>
          {icon}
          <Title option={option}>{title}</Title>
        </Container>
      )}
    </Pressable>
  );
}
