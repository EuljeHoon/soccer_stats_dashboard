import styled from "styled-components";
import PlayerHero from "./components/PlayerHero";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default function App() {
  
  return (
    <Container>
      <PlayerHero playerID={6} />
    </Container>
  );
}