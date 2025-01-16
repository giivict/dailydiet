import React from "react";
import { Container, Title, Description } from "./styles";

type Props = {
  title: string;
  subtitle: string;
  backgroundColor?: {
    backgroundColor?: string;
  };
};

export function StatisticCard({ title, subtitle, backgroundColor }: Props) {
  return (
    <Container style={backgroundColor}>
      <Title>{title}</Title>
      <Description>{subtitle}</Description>
    </Container>
  );
}
