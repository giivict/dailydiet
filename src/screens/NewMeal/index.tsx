import { useState } from "react";
import { Container, Content, Form, Header, RowContent, Title } from "./styles";
import { Alert } from "react-native";

import { HeaderTitle } from "@components/HeaderTitle";
import { Input } from "@components/Input";
import { YesOrNo } from "@components/YesOrNo";
import { Button } from "@components/Button";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/routes/app.routes";
import { mealCreate } from "@storage/meal/mealCreate";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export function NewMeal() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [selectedOption, setSelectedOption] = useState<"Sim" | "Não" | null>(
    null
  );

  const navigation = useNavigation<NavigationProps>();

  function handleGoHome() {
    navigation.navigate("home");
  }

  async function handleRegisterMeal() {
    if (!name || !description || !date || !hour || !selectedOption) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    const newMeal = {
      id: `${Date.now()}`,
      name,
      description,
      date,
      hour,
      isHealthy: selectedOption === "Sim",
    };

    try {
      await mealCreate(newMeal);

      navigation.navigate("created", {
        option: selectedOption === "Sim" ? "Healthy" : "UnHealthy",
      });
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar a refeição.");
    }
  }
  return (
    <Container>
      <Header>
        <HeaderTitle title="Nova Refeição" onPress={handleGoHome} />
      </Header>

      <Content>
        <Form>
          <Input label="Nome" value={name} onChangeText={setName} />
          <Input
            label="Descrição"
            multiline
            numberOfLines={5}
            style={{ height: 150, textAlignVertical: "top" }}
            value={description}
            onChangeText={setDescription}
          />

          <RowContent>
            <Input
              label="Data"
              style={{ flex: 1 }}
              value={date}
              onChangeText={setDate}
            />
            <Input
              label="Hora"
              style={{ flex: 1 }}
              value={hour}
              onChangeText={setHour}
            />
          </RowContent>

          <Title>Está dentro da dieta?</Title>

          <RowContent>
            <YesOrNo
              isSelected={selectedOption === "Sim"}
              option="Sim"
              onPress={() => setSelectedOption("Sim")}
            />
            <YesOrNo
              isSelected={selectedOption === "Não"}
              option="Não"
              onPress={() => setSelectedOption("Não")}
            />
          </RowContent>
        </Form>

        <Button
          onPress={handleRegisterMeal}
          option="PRIMARY"
          title="Cadastrar Refeição"
        />
      </Content>
    </Container>
  );
}
