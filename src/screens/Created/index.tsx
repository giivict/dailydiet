import React from "react";
import { Container, Title, Picture, Subtitle } from "./styles";
import theme from "src/theme";

import HealthyPng from "src/assets/Illustration.png";
import UnhealthyPng from "src/assets/Illustrationfailed.png";
import { Button } from "@components/Button";
import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import { RootStackParamList } from "src/routes/app.routes";

type Props = NativeStackScreenProps<RootStackParamList, "created">;

export function Created({ route }: Props) {
  const { option } = route.params;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  function handleGoHome() {
    navigation.navigate("home");
  }

  return (
    <Container>
      {option === "Healthy" ? (
        <>
          <Title option="Healthy">Continue assim!</Title>
          <Subtitle>
            Você continua{" "}
            <Subtitle style={{ fontFamily: theme.FONT_FAMILY.BOLD }}>
              dentro da dieta.
            </Subtitle>{" "}
            Muito bem!
          </Subtitle>
          <Picture source={HealthyPng} />
        </>
      ) : (
        <>
          <Title option="Unhealthy">Que pena!</Title>
          <Subtitle>
            Você{" "}
            <Subtitle style={{ fontFamily: theme.FONT_FAMILY.BOLD }}>
              saiu da dieta
            </Subtitle>{" "}
            dessa vez, mas continue se esforçando e não desista!
          </Subtitle>
          <Picture source={UnhealthyPng} />
        </>
      )}

      <Button
        option="PRIMARY"
        title="Ir para a página inicial"
        style={{ width: "50%" }}
        onPress={handleGoHome}
      />
    </Container>
  );
}
