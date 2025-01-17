import { Container, Logo, Profile } from "./styles";

import LogoPNG from "src/assets/Logo.png";
import ProfilePNG from "src/assets/Ellipse.png";

export function Header() {
  return (
    <Container>
      <Logo source={LogoPNG} />

      <Profile
        source={{
          uri: "https://media.licdn.com/dms/image/v2/D4D03AQFzbYXw5NkQgw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709128053400?e=1742428800&v=beta&t=IfrSPsfau1yjR5V7FSDkjD_cI1WbUvw-8QaK-k3RveM",
        }}
      />
    </Container>
  );
}
