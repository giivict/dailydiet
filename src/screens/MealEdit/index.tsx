import { useState } from "react";

import { Container, Content, Form, Header, RowContent, Title } from "./styles";

import { HeaderTitle } from "@components/HeaderTitle";
import { Input } from "@components/Input";
import { YesOrNo } from "@components/YesOrNo";
import { Button } from "@components/Button";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/routes/app.routes";
import { useNavigation, useRoute } from "@react-navigation/native";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

type RouteParams = {
  mealId: string;
};

export function MealEdit() {
  const [selectedOption, setSelectedOption] = useState<"Sim" | "Não" | null>(
    null
  );
  const navigation = useNavigation<NavigationProps>();

  const route = useRoute();
  const { mealId } = route.params as RouteParams;

  function handleMealDetails() {
    navigation.navigate("meal", { mealId });
  }
  return (
    <Container>
      <Header>
        <HeaderTitle title="Editar Refeição" onPress={handleMealDetails} />
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
