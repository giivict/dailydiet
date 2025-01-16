import { useState } from "react";

import { Container, Content, Form, Header, RowContent, Title } from "./styles";

import { HeaderTitle } from "@components/HeaderTitle";
import { Input } from "@components/Input";
import { YesOrNo } from "@components/YesOrNo";
import { Button } from "@components/Button";

export function MealEdit() {
  const [selectedOption, setSelectedOption] = useState<"Sim" | "Não" | null>(
    null
  );
  return (
    <Container>
      <Header>
        <HeaderTitle title="Editar Refeição" />
      </Header>

      <Content>
        <Form>
          <Input label="Nome" />
          <Input
            style={{ height: 150, textAlignVertical: "top" }}
            label="Descrição"
            multiline
            numberOfLines={5}
          />

          <RowContent>
            <Input label="Data" style={{ flex: 1 }} />
            <Input label="Hora" style={{ flex: 1 }} />
          </RowContent>

          <Title>Está dentro da dieta?</Title>

          <RowContent>
            <YesOrNo
              option="Sim"
              isSelected={selectedOption === "Sim"}
              onPress={() => setSelectedOption("Sim")}
            />
            <YesOrNo
              option="Não"
              isSelected={selectedOption === "Não"}
              onPress={() => setSelectedOption("Não")}
            />
          </RowContent>
        </Form>

        <Button option="PRIMARY" title="Salvar Alterações" />
      </Content>
    </Container>
  );
}
