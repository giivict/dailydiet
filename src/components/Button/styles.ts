import styled from "styled-components/native";

type Props = {
  option: "PRIMARY" | "SECUNDARY";
  isPressed: boolean;
};

export const Container = styled.View<Props>`
  flex-direction: row;
  width: 100%;
  min-height: 56px;
  max-height: 56px;
  gap: 12px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  padding: 10px;

  background-color: ${({ theme, option, isPressed }) =>
    isPressed
      ? option === "PRIMARY"
        ? theme.COLORS.GRAY[100]
        : theme.COLORS.GRAY[500]
      : option === "PRIMARY"
      ? theme.COLORS.GRAY[200]
      : "transparent"};

  border-color: ${({ theme, option }) =>
    option === "SECUNDARY" ? theme.COLORS.GRAY[100] : "transparent"};

  border-width: ${({ option }) => (option === "SECUNDARY" ? 1 : 0)}px;
`;

export const Title = styled.Text<Omit<Props, "isPressed">>`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme, option }) =>
    option === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY[100]};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
