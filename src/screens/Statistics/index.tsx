import { PercentCard } from "@components/PercentCard";
import { Container, Content, Header, RowContent, Title } from "./styles";
import { ArrowLeft } from "phosphor-react-native";
import theme from "src/theme";
import { StatisticCard } from "@components/StatisticCard";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/routes/app.routes";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export function Statistics() {
  const navigation = useNavigation<NavigationProps>();

  function handleGoBack() {
    navigation.navigate("home");
  }

  return (
    <Container>
      <Header>
        <PercentCard
          icon={<ArrowLeft size={24} color={theme.COLORS.GREEN.dark} />}
          iconPosition={{ left: 24 }}
          onPress={handleGoBack}
        />
      </Header>

      <Content>
        <Title>Estatísticas gerais</Title>
        <StatisticCard
          title="22"
          subtitle="melhor sequência de pratos dentro da dieta"
        />
        <StatisticCard title="109" subtitle="refeições registradas" />

        <RowContent>
          <StatisticCard
            title="99"
            subtitle="refeições dentro da dieta"
            backgroundColor={{ backgroundColor: theme.COLORS.GREEN.light }}
          />
          <StatisticCard
            title="10"
            subtitle="refeições fora da dieta"
            backgroundColor={{ backgroundColor: theme.COLORS.RED.light }}
          />
        </RowContent>
      </Content>
    </Container>
  );
}
