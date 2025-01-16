import { useNavigation, useRoute } from "@react-navigation/native";
import { Container, Content, Header, RowContent, Title } from "./styles";

import { ArrowLeft } from "phosphor-react-native";
import theme from "src/theme";

import { PercentCard } from "@components/PercentCard";
import { StatisticCard } from "@components/StatisticCard";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/routes/app.routes";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

type Statistics = {
  percentage: string;
  totalMeals: number;
  healthyMeals: number;
  unhealthyMeals: number;
  bestSequence: number;
};

type RouteParams = {
  statistics: Statistics;
};

export function Statistics() {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute();
  const { statistics } = route.params as RouteParams;

  function handleGoBack() {
    navigation.navigate("home");
  }

  return (
    <Container>
      <Header>
        <PercentCard
          title={`${statistics.percentage}%`}
          subtitle="das refeições dentro da dieta"
          icon={<ArrowLeft size={24} color={theme.COLORS.GREEN.dark} />}
          iconPosition={{ left: 24 }}
          onPress={handleGoBack}
        />
      </Header>

      <Content>
        <Title>Estatísticas gerais</Title>

        <StatisticCard
          title={`${statistics.bestSequence}`}
          subtitle="melhor sequência de pratos dentro da dieta"
        />
        <StatisticCard
          title={`${statistics.totalMeals}`}
          subtitle="refeições registradas"
        />

        <RowContent>
          <StatisticCard
            title={`${statistics.healthyMeals}`}
            subtitle="refeições dentro da dieta"
            backgroundColor={{ backgroundColor: theme.COLORS.GREEN.light }}
          />
          <StatisticCard
            title={`${statistics.unhealthyMeals}`}
            subtitle="refeições fora da dieta"
            backgroundColor={{ backgroundColor: theme.COLORS.RED.light }}
          />
        </RowContent>
      </Content>
    </Container>
  );
}
