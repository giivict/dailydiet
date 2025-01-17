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
import { ListIsEmpty } from "@components/ListIsEmpty";

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
  const [statistics, setStatistics] = useState({
    percentage: 0,
    totalMeals: 0,
    healthyMeals: 0,
    unhealthyMeals: 0,
    bestSequence: 0,
  });

  const navigation = useNavigation<NavigationProps>();

  function handleStatistics() {
    navigation.navigate("statistics", { statistics });
  }

  function handleNewMeal() {
    navigation.navigate("new");
  }

  function handleMealDetails(mealId: string) {
    navigation.navigate("meal", { mealId });
  }

  function groupMealsByDate(mealsList: Meal[]) {
    const mealsWithParsedDate = mealsList.map((meal) => {
      const [day, month, year] = meal.date.split(".");
      return {
        ...meal,
        formattedDate: `${year}-${month}-${day}`,
      };
    });

    const sortedMeals = mealsWithParsedDate.sort((a, b) => {
      const dateTimeA = new Date(`${a.formattedDate}T${a.hour}`);
      const dateTimeB = new Date(`${b.formattedDate}T${b.hour}`);
      return dateTimeB.getTime() - dateTimeA.getTime();
    });

    const grouped = sortedMeals.reduce((acc, meal) => {
      const dateIndex = acc.findIndex((group) => group.title === meal.date);

      if (dateIndex >= 0) {
        acc[dateIndex].data.push(meal);
      } else {
        acc.push({ title: meal.date, data: [meal] });
      }

      return acc;
    }, [] as { title: string; data: Meal[] }[]);

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

  async function fetchAndCalculateStatistics() {
    try {
      const data = await mealGetAll();
      setMeals(data);

      const totalMeals = data.length;
      const healthyMeals = data.filter((meal) => meal.isHealthy).length;
      const unhealthyMeals = totalMeals - healthyMeals;

      let bestSequence = 0;
      let currentSequence = 0;
      data.forEach((meal) => {
        if (meal.isHealthy) {
          currentSequence++;
          if (currentSequence > bestSequence) {
            bestSequence = currentSequence;
          }
        } else {
          currentSequence = 0;
        }
      });

      const percentage =
        totalMeals > 0
          ? parseFloat(((healthyMeals / totalMeals) * 100).toFixed(2))
          : 0;

      const stats = {
        percentage,
        totalMeals,
        healthyMeals,
        unhealthyMeals,
        bestSequence,
      };

      setStatistics(stats);
      groupMealsByDate(data);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível calcular as estatísticas.");
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

  useFocusEffect(
    useCallback(() => {
      fetchAndCalculateStatistics();
    }, [])
  );
  return (
    <Container>
      <HomeHeader>
        <Header />
      </HomeHeader>

      <Content>
        <PercentCard
          title={`${statistics.percentage}%`}
          subtitle="das refeições dentro da dieta"
          icon={
            <ArrowUpRight
              size={24}
              color={
                statistics.percentage >= 50
                  ? theme.COLORS.GREEN.dark
                  : theme.COLORS.RED.dark
              }
            />
          }
          iconPosition={{ right: 8, top: 8 }}
          onPress={handleStatistics}
          backgroundColor={{
            backgroundColor:
              statistics.percentage >= 50
                ? theme.COLORS.GREEN.light
                : theme.COLORS.RED.light,
          }}
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
                backgroundColor: theme.COLORS.GRAY[700],
                fontSize: theme.FONT_SIZE.XL,
                fontFamily: theme.FONT_FAMILY.BOLD,
                color: theme.COLORS.GRAY[100],
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
          ListEmptyComponent={() => (
            <ListIsEmpty
              title="Não há refeições registradas"
              subtitle="Bora cadastrar uma refeição?"
            />
          )}
          showsVerticalScrollIndicator={false}
          stickySectionHeadersEnabled
          contentContainerStyle={groupedMeals.length === 0 && { flex: 1 }}
        />
      </Content>
    </Container>
  );
}
