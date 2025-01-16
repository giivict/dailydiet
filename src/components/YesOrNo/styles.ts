import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

type ContainerProps = {
  isSelected: boolean;
  option: "Sim" | "Não";
};
type CircleProps = {
  option: "Sim" | "Não";
};

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 100%;
  min-height: 56px;
  padding: 10px;
  flex-direction: row;

  border-width: ${({ isSelected }) => (isSelected ? 1 : 0)}px;
  border-color: ${({ isSelected, option, theme }) =>
    isSelected
      ? option === "Sim"
        ? theme.COLORS.GREEN.dark
        : theme.COLORS.RED.dark
      : "transparent"};
  background-color: ${({ isSelected, option, theme }) =>
    isSelected
      ? option === "Sim"
        ? theme.COLORS.GREEN.light
        : theme.COLORS.RED.light
      : theme.COLORS.GRAY[600]};
  border-radius: 8px;
  gap: 8px;

  justify-content: center;
  align-items: center;
`;

export const Option = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY[100]};
`;

export const Circle = styled.View<CircleProps>`
  width: 10px;
  height: 10px;
  border-radius: 8px;
  background-color: ${({ option, theme }) =>
    option === "Sim" ? theme.COLORS.GREEN.dark : theme.COLORS.RED.dark};
`;
