const API_BASE_URL = 'http://127.0.0.1:8000'; // Django Server Adsress

export interface PlayerInfo {
  name: string;
  position: string;
  nationality: string;
  age: number;
}

export const getPlayerInfo = async (playerID: number): Promise<PlayerInfo | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/players/${playerID}/info/`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // parsing json response to PlayerInfo object
    const data = await response.json();
    return {
      name: data.name,
      position: data.position,
      nationality: data.nationality,
      age: data.age
    };
  } 
  catch (e) {
    console.error('Error fetching player information:', e);
    return null;
  }
};