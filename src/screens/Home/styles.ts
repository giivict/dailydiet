import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY[700]};
`;

export const HomeHeader = styled.View`
  padding: 24px;
  margin-top: 20px;
`;
export const Content = styled.View`
  padding: 24px;
`;

export const Tittle = styled.Text`
  margin-top: 50px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.COLORS.GRAY[100]};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;
