import styled from "styled-components/native";

type Props = {
  option: "Healthy" | "Unhealthy";
};

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  gap: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY[700]};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<Props>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  color: ${({ option, theme }) =>
    option === "Healthy" ? theme.COLORS.GREEN.dark : theme.COLORS.RED.dark};
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.GRAY[100]};
  text-align: center;
`;

export const Picture = styled.Image`
  margin-top: 40px;
  margin-bottom: 32px;
`;
