import { TouchableOpacityProps } from "react-native";
import { Container, Title, IconButton, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export function HeaderTitle({ title, ...rest }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <IconButton {...rest}>
        <Icon />
      </IconButton>
    </Container>
  );
}
