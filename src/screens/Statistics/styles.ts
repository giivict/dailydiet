import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GREEN.light};
`;

export const Header = styled.View`
  padding-top: 72px;
  padding-bottom: 40px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  gap: 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY[700]};
`;

export const Title = styled.Text`
  text-align: center;
  margin-bottom: 25px;
  margin-top: 10px;

  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY[200]};
`;

export const RowContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
`;
