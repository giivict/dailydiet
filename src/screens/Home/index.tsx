import { useCallback, useEffect, useState } from "react";
import { Alert, SectionList } from "react-native";
import { Container, Content, HomeHeader, Tittle } from "./styles";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/routes/app.routes";

import { Header } from "@components/Header";
import { PercentCard } from "@components/PercentCard";
import { Button } from "@components/Button";
import { MealCard } from "@components/MealCard";

import theme from "src/theme";
import { ArrowUpRight, Plus } from "phosphor-react-native";

import { mealGetAll } from "@storage/meal/mealGetAll";

type Meal = {
  id: string;
  name: string;
  hour: string;
  date: string;
  isHealthy: boolean;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export function Home() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [groupedMeals, setGroupedMeals] = useState<
    { title: string; data: Meal[] }[]
  >([]);

  const navigation = useNavigation<NavigationProps>();

  function handleStatistics() {
    navigation.navigate("statistics");
  }

  function handleNewMeal() {
    navigation.navigate("new");
  }

  function handleMealDetails(mealId: string) {
    navigation.navigate("meal", { mealId });
  }

  function groupMealsByDate(mealsList: Meal[]) {
    const grouped = mealsList.reduce((acc, meal) => {
      const dateIndex = acc.findIndex((group) => group.title === meal.date);

      if (dateIndex >= 0) {
        acc[dateIndex].data.push(meal);
      } else {
        acc.push({ title: meal.date, data: [meal] });
      }

      return acc;
    }, [] as { title: string; data: typeof meals }[]);

    setGroupedMeals(grouped);
  }

  async function fetchMeals() {
    try {
      const data = await mealGetAll();
      setMeals(data);
    } catch (error) {
      Alert.alert("Refeições", "Erro ao carregar as refeições.");
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  useEffect(() => {
    if (meals.length > 0) {
      groupMealsByDate(meals);
    }
  }, [meals]);
  return (
    <Container>
      <HomeHeader>
        <Header />
      </HomeHeader>

      <Content>
        <PercentCard
          icon={<ArrowUpRight size={24} color={theme.COLORS.GREEN.dark} />}
          iconPosition={{ right: 8, top: 8 }}
          onPress={handleStatistics}
        />
        <Tittle>Refeições</Tittle>
        <Button
          option="PRIMARY"
          icon={<Plus size={18} color={theme.COLORS.WHITE} />}
          title="Nova refeição"
          onPress={handleNewMeal}
        />

        <SectionList
          sections={groupedMeals}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          renderSectionHeader={({ section: { title } }) => (
            <Tittle
              style={{
                fontSize: theme.FONT_SIZE.XL,
                fontFamily: theme.FONT_FAMILY.BOLD,
                color: theme.COLORS.GRAY[100],
                paddingVertical: 8,
              }}
            >
              {title}
            </Tittle>
          )}
          renderItem={({ item }) => (
            <MealCard
              meal={item.name}
              hour={item.hour}
              indicator={item.isHealthy ? "Sim" : "Não"}
              onPress={() => handleMealDetails(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          stickySectionHeadersEnabled
        />
      </Content>
    </Container>
  );
}
