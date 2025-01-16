import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  margin-bottom: 16px;
  margin-top: 15px;
`;

export const StyledTextInput = styled.TextInput`
  width: 100%;
  min-height: 56px;
  background-color: ${({ theme }) => theme.COLORS.GRAY[700]};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY[500]};
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.GRAY[100]};
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY[200]};
  margin-bottom: 4px;
`;
