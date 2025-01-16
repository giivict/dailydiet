import { ReactNode } from "react";
import { Container, Percentage, Description, IconButton } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  subtitle: string;
  backgroundColor?: {
    backgroundColor?: string;
  };
  icon?: ReactNode;
  iconPosition?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
};

export function PercentCard({
  title,
  backgroundColor,
  subtitle,
  icon,
  iconPosition,
  ...rest
}: Props) {
  return (
    <Container style={backgroundColor}>
      <IconButton style={iconPosition} {...rest}>
        {icon}
      </IconButton>
      <Percentage>{title}</Percentage>
      <Description>{subtitle}</Description>
    </Container>
  );
}
