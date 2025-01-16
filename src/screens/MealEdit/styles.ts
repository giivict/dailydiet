import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY[500]};
`;

export const Header = styled.View`
  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY[700]};
`;

export const Form = styled.View`
  flex: 1;
`;

export const RowContent = styled.View`
  max-height: 56px;
  width: 50%;
  flex-direction: row;
  justify-content: space-around;
  gap: 4px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY[200]};
  margin-top: 66px;
  margin-bottom: 4px;
`;
