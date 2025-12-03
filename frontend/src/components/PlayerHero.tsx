import { useState, useEffect } from "react";
import styled from "styled-components";
import { getPlayerInfo } from "../utils/fetchInfo";
import type { PlayerInfo } from "../utils/fetchInfo";
import { getPlayerPhoto } from "../utils/fetchImage";
import { getPlayerTeam } from "../utils/fetchTeam";



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