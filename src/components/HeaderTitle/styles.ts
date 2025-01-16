import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin-top: 40px;
  align-items: center;
  text-align: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY[100]};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const IconButton = styled.TouchableOpacity`
  position: absolute;
  left: 0px;
`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY[200],
  weight: "bold",
}))``;
