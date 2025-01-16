import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
  option: "PRIMARY" | "SECUNDARY";
};

export const Container = styled(TouchableOpacity)<Props>`
  flex-direction: row;
  width: 100%;
  min-height: 56px;
  max-height: 56px;
  gap: 12px;

  background-color: ${({ theme, option }) =>
    option === "PRIMARY" ? theme.COLORS.GRAY[200] : "transparent"};

  border-color: ${({ theme, option }) =>
    option === "SECUNDARY" ? theme.COLORS.GRAY[100] : "transparent"};

  border-width: ${({ option }) => (option === "SECUNDARY" ? 1 : 0)}px;
  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<Props>`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme, option }) =>
    option === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY[100]};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
