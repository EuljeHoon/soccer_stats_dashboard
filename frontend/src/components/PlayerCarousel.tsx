import { useState } from "react";
import styled from "styled-components";
import PlayerHero from "./PlayerHero";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const ArrowRow = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
`;

const ArrowButton = styled.button`
    width: 44px;
    height: 44px;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
    background: white;
    cursor: pointer;
    font-size: 20px;

    &:active {
        transform: scale(0.98);
    }
`;

const Indicator = styled.div`
    font-weight: 600;
`;

function wrap(n: number, min: number, max: number) {
    const range = max - min + 1;
    return ((((n - min) % range) + range) % range) + min;
}

export default function PlayerCarousel() {
    const [playerID, setPlayerID] = useState(1);

    const prev = () => setPlayerID((p) => wrap(p - 1, 1, 10));
    const next = () => setPlayerID((p) => wrap(p + 1, 1, 10));
  
    return (
      <Wrapper>
        <ArrowRow>
          <ArrowButton onClick={prev} aria-label="previous player">
            ←
          </ArrowButton>
          <Indicator>{playerID} / 10</Indicator>
          <ArrowButton onClick={next} aria-label="next player">
            →
          </ArrowButton>
        </ArrowRow>
  
        <PlayerHero playerID={playerID} />
      </Wrapper>
    );
}