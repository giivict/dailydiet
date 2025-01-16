import { useRoute, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  Container,
  Content,
  Form,
  Header,
  Title,
  Description,
  DateTime,
  StatusIndicator,
  Circle,
  StatusText,
} from "./styles";
import { HeaderTitle } from "@components/HeaderTitle";
import { Button } from "@components/Button";
import { PencilSimpleLine, Trash } from "phosphor-react-native";
import theme from "src/theme";
import { mealGetAll } from "@storage/meal/mealGetAll";
import { Alert } from "react-native";
import { mealRemoveByName } from "@storage/meal/mealRemoveByName";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/routes/app.routes";

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

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export function Meal() {
  const route = useRoute();
  const [meal, setMeal] = useState<Meal | null>(null);
  const { mealId } = route.params as RouteParams;

  const navigation = useNavigation<NavigationProps>();

  function handleEditMeal() {
    if (meal) {
      navigation.navigate("edit", { mealId: meal.id });
    }
  }

  function handleGoHome() {
    navigation.navigate("home");
  }

  async function fetchRegisteredMeal() {
    try {
      const allMeals = await mealGetAll();
      const selectedMeal = allMeals.find((meal) => meal.id === mealId);
      if (selectedMeal) {
        setMeal(selectedMeal);
      } else {
        Alert.alert("Erro", "Refeição não encontrada.");
        navigation.goBack();
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar a refeição.");
    }
  }

  async function mealRemove() {
    if (!meal) return;

    try {
      await mealRemoveByName(meal);
      navigation.navigate("home");
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Remover refeição",
        "Não foi possível remover esta refeição."
      );
    }
  }

  async function handleMealRemove() {
    Alert.alert("Remover", "Deseja remover essa refeição?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => mealRemove() },
    ]);
  }

  useEffect(() => {
    fetchRegisteredMeal();
  }, [mealId]);

  if (!meal) return null;

  return (
    <Container>
      <Header>
        <HeaderTitle title="Refeição" onPress={handleGoHome} />
      </Header>
      <Content>
        <Form>
          <Title>{meal.name}</Title>
          <Description>{meal.description}</Description>

          <DateTime>Data e hora</DateTime>
          <Description>
            {meal.date} às {meal.hour}
          </Description>

          <StatusIndicator>
            <Circle isHealthy={meal.isHealthy} />
            <StatusText>
              {meal.isHealthy ? "dentro da dieta" : "fora da dieta"}
            </StatusText>
          </StatusIndicator>
        </Form>

        <Button
          option="PRIMARY"
          title="Editar refeição"
          icon={<PencilSimpleLine size={18} color={theme.COLORS.WHITE} />}
          onPress={handleEditMeal}
        />
        <Button
          option="SECUNDARY"
          title="Excluir refeição"
          icon={<Trash size={18} color={theme.COLORS.GRAY[100]} />}
          onPress={handleMealRemove}
        />
      </Content>
    </Container>
  );
}
