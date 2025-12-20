import styled from "styled-components";
import PlayerCarousel from "./components/PlayerCarousel";

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
      <PlayerCarousel />
    </Container>
  );
}