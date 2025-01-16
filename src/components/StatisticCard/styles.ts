import styled from "styled-components/native";

export const Container = styled.View`
  padding: 16px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.GRAY[600]};
`;

export const Title = styled.Text`
  text-align: center;

  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  color: ${({ theme }) => theme.COLORS.GRAY[100]};
`;
export const Description = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY[200]};
`;
