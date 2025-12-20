import { useState, useEffect } from "react";
import styled from "styled-components";
import { getPlayerInfo, type PlayerInfo } from "../utils/fetchInfo";
import { getPlayerPhoto } from "../utils/fetchImage";
import { getPlayerTeam } from "../utils/fetchTeam";

const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px;
`;

const PlayerPhoto = styled.img`
    max-width: 300px;
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const PlayerName = styled.h2`
    margin: 0;
    font-size: 32px;
    font-weight: bold;
    color: black;
    text-align: center;
`;

const TeamName = styled.h3`
    margin: 0;
    font-size: 20px;
    font-weight: 400;
    color: black;
    text-align: center;
`;

const PlayerDetails = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    font-size: 16px;
    color: black;
    text-align: center;
`;

interface PlayerHeroProps {
    playerID: number;
}

export default function PlayerHero({playerID}: PlayerHeroProps) {
    const [info, setInfo] = useState<PlayerInfo | null>(null);
    const [photoUrl, setPhotoUrl] = useState<string | null>(null);
    const [team, setTeam] = useState<string | null>(null);

    useEffect(() => {
        const fetchInfo = async () => {
            const playerInfo = await getPlayerInfo(playerID);
            setInfo(playerInfo);
        };
        const fetchPhoto = async () => {
            const url = await getPlayerPhoto(playerID);
            setPhotoUrl(url);
        };
        const fetchTeam = async () => {
            const playerTeam = await getPlayerTeam(playerID);
            setTeam(playerTeam);
        };
        fetchInfo();
        fetchPhoto();
        fetchTeam();
    }, [playerID]);

    if (!info || !photoUrl || !team) {
        return null;
    }

    return (
        <HeroContainer>
            <div>
                <PlayerName>{info.name}</PlayerName>
            </div>
            <PlayerPhoto src={photoUrl} alt={info.name} />
            <div>
                <TeamName>Team: {team}</TeamName>
            </div>
            <PlayerDetails>
                <div>Position: {info.position}</div>
                <div>Nationality: {info.nationality}</div>
                <div>Age: {info.age}</div>
            </PlayerDetails>
        </HeroContainer>
    );
}