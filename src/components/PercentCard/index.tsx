import { ReactNode } from "react";
import { Container, Percentage, Description, IconButton } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  icon?: ReactNode;
  iconPosition?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
};

export function PercentCard({ icon, iconPosition, ...rest }: Props) {
  return (
    <Container>
      <IconButton style={iconPosition} {...rest}>
        {icon}
      </IconButton>
      <Percentage>100%</Percentage>
      <Description>das refeições dentro da dieta</Description>
    </Container>
  );
}
