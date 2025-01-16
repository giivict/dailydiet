import { TouchableOpacityProps } from "react-native";
import {
  Container,
  Content,
  Meal,
  Separator,
  Hour,
  Date,
  StatusIndicator,
} from "./styles";

type Props = TouchableOpacityProps & {
  date?: string;
  meal: string;
  hour: string;
  indicator: "Sim" | "Não";
  showDate?: boolean;
};

export function MealCard({
  date,
  meal,
  hour,
  indicator,
  showDate,
  ...rest
}: Props) {
  return (
    <Container>
      <Content {...rest}>
        <Hour>{hour}</Hour>
        <Separator>|</Separator>
        <Meal>{meal}</Meal>
        <StatusIndicator option={indicator} />
      </Content>
    </Container>
  );
}
