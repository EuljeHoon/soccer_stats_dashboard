const API_BASE_URL = 'http://127.0.0.1:8000'; // Django Server Adsress

export const getPlayerPhoto = async (playerID: number): Promise<string | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/players/${playerID}/photo/`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // parsing json response to url string
    const data = await response.json();
    return data.photo_url;
  } catch (error) {
    console.error('Error fetching player photo:', error);
    return null;
  }
};

