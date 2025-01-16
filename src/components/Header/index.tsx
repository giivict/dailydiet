import { Container, Logo, Profile } from "./styles";

import LogoPNG from "src/assets/Logo.png";
import ProfilePNG from "src/assets/Ellipse.png";

export function Header() {
  return (
    <Container>
      <Logo source={LogoPNG} />

      <Profile source={ProfilePNG} />
    </Container>
  );
}
