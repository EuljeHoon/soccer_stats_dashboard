import { useState, useEffect } from "react";
import styled from "styled-components";
import { getPlayerPhoto } from "../utils/fetchImage";

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const PlayerImg = styled.img`
  max-width: 300px;
  border-radius: 8px;
`;

interface PlayerImageProps {
  playerID: number;
}

export default function PlayerImage({ playerID }: PlayerImageProps) {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      const url = await getPlayerPhoto(playerID);
      setPhotoUrl(url);
    };

    fetchPhoto();
  }, [playerID]);

  if (!photoUrl) {
    return null;
  }

  return (
    <ImageContainer>
      <PlayerImg src={photoUrl} alt={`Player ${playerID}`} />
    </ImageContainer>
  );
}
