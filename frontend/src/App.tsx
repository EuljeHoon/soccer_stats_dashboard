import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #60a5fa, #2563eb);
`;

const Title = styled.h1`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background: white;
  color: #2563eb;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #2563eb;
    color: white;
  }
`;

export default function App() {
  return (
    <Container>
      <Title>Vite + Styled Components 💅</Title>
      <Button>Click me</Button>
    </Container>
  );
}