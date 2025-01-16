import { useEffect, useState } from "react";

import { Container, Content, Form, Header, RowContent, Title } from "./styles";

import { HeaderTitle } from "@components/HeaderTitle";
import { Input } from "@components/Input";
import { YesOrNo } from "@components/YesOrNo";
import { Button } from "@components/Button";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/routes/app.routes";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert } from "react-native";
import { mealGetAll } from "@storage/meal/mealGetAll";
import { mealUpdateById } from "@storage/meal/mealUpdateById";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

type RouteParams = {
  mealId: string;
};

type Meal = {
  id: string;
  name: string;
  description: string;
  hour: string;
  date: string;
  isHealthy: boolean;
};

export function MealEdit() {
  const [meal, setMeal] = useState<Meal | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [selectedOption, setSelectedOption] = useState<"Sim" | "Não" | null>(
    null
  );
  const navigation = useNavigation<NavigationProps>();

  const route = useRoute();
  const { mealId } = route.params as RouteParams;

  function handleMealDetails() {
    navigation.navigate("meal", { mealId });
  }

  async function fetchMealData() {
    try {
      const allMeals = await mealGetAll();
      const currentMeal = allMeals.find((meal) => meal.id === mealId);

      if (currentMeal) {
        setMeal(currentMeal);
        setName(currentMeal.name);
        setDescription(currentMeal.description);
        setDate(currentMeal.date);
        setHour(currentMeal.hour);
        setSelectedOption(currentMeal.isHealthy ? "Sim" : "Não");
      } else {
        Alert.alert("Erro", "Refeição não encontrada.");
        navigation.goBack();
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os dados da refeição.");
    }
  }

  async function handleSaveMeal() {
    if (!meal) return;

    try {
      const updatedMeal = {
        ...meal,
        name,
        description,
        date,
        hour,
        isHealthy: selectedOption === "Sim",
      };

      await mealUpdateById(mealId, updatedMeal);

      navigation.navigate("meal", { mealId });
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar as alterações.");
    }
  }

  useEffect(() => {
    fetchMealData();
  }, [mealId]);

  if (!meal) return null;

  return (
    <Container>
      <Header>
        <HeaderTitle title="Editar Refeição" onPress={handleMealDetails} />
      </Header>

      <Content>
        <Form>
          <Input label="Nome" value={name} onChangeText={setName} />
          <Input
            style={{ height: 150, textAlignVertical: "top" }}
            label="Descrição"
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={5}
          />

          <RowContent>
            <Input
              label="Data"
              value={date}
              onChangeText={setDate}
              style={{ flex: 1 }}
            />
            <Input
              label="Hora"
              value={hour}
              onChangeText={setHour}
              style={{ flex: 1 }}
            />
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

        <Button
          option="PRIMARY"
          title="Salvar Alterações"
          onPress={handleSaveMeal}
        />
      </Content>
    </Container>
  );
}
