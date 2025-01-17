import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: 50px;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const Profile = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  border-width: 2px;

  border-color: ${({ theme }) => theme.COLORS.GRAY[100]};
`;
