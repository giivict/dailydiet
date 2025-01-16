import { TextInputProps } from "react-native";
import { Container, StyledTextInput, Label } from "./styles";

type IntrinsicAttributes = any;

type Props = IntrinsicAttributes &
  TextInputProps & {
    label?: string;
  };

export function Input({ label, ...rest }: Props) {
  return (
    <Container>
      <Label>{label}</Label>
      <StyledTextInput autoCapitalize="sentences" {...rest} />
    </Container>
  );
}
