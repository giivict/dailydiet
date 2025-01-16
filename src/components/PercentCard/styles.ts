import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GREEN.light};
  padding: 24px;
  gap: 2px;
  border-radius: 8px;
  align-items: center;
`;

export const Percentage = styled.Text`
  text-align: center;

  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
  color: ${({ theme }) => theme.COLORS.GRAY[100]};
`;

export const Description = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY[200]};
`;

export const IconButton = styled(TouchableOpacity)`
  position: absolute;
`;
