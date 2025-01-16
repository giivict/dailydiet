import styled from "styled-components/native";

type Props = {
  isHealthy: boolean;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GREEN.light};
`;

export const Header = styled.View`
  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  gap: 12px;

  background-color: ${({ theme }) => theme.COLORS.GRAY[700]};
`;

export const Form = styled.View`
  flex: 1;
  gap: 12px;
`;

export const Title = styled.Text`
  text-align: left;
  font-size: 20px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY[100]};
`;

export const Description = styled.Text`
  text-align: left;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY[200]};
`;

export const DateTime = styled.Text`
  text-align: left;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY[100]};
`;

export const StatusIndicator = styled.View`
  padding: 8px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 10px;
  flex-direction: row;
  border-radius: 100px;
  gap: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY[600]};
  align-self: flex-start;
  align-items: center;
  justify-content: left;
`;

export const StatusText = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY[200]};
`;

export const Circle = styled.View<Props>`
  width: 10px;
  height: 10px;
  border-radius: 8px;
  background-color: ${({ theme, isHealthy }) =>
    isHealthy ? theme.COLORS.GREEN.dark : theme.COLORS.RED.dark};
`;
