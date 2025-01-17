import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
  option: "Sim" | "Não";
};

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex-direction: row;

  gap: 12px;
  padding: 16px;
  width: 100%;
  margin-bottom: 10px;

  border-width: 1px;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.COLORS.GRAY[500]};

  align-items: center;
`;

export const Separator = styled.Text`
  margin: 0 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY[400]};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY[100]};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Meal = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY[200]};
    font-family: ${theme.FONT_FAMILY.REGULAR};

    margin-right: 60px;
    flex-shrink: 1;
  `}
`;

export const StatusIndicator = styled.View<Props>`
  width: 14px;
  height: 14px;
  border-radius: 10px;
  position: absolute;
  right: 15px;
  background-color: ${({ theme, option }) =>
    option === "Sim" ? theme.COLORS.GREEN.mid : theme.COLORS.RED.mid};
`;
