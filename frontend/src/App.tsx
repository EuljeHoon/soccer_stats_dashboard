import styled from "styled-components";
import PlayerHero from "./components/PlayerHero";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #60a5fa, #2563eb);
`;

export default function App() {
  
  return (
    <Container>
      <PlayerHero playerIDs={playerIDs} initialIndex={0} />
    </Container>
  );
}