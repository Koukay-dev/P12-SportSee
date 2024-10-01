const API_URL = "http://localhost:3001/user";

/**
 * Effectue un call API pour récupérer les données sur la
 * route : http://localhost:3000/user/${userId} 
 * qui contient les informations ci-dessous, sous le même format :
 * {
    "id": 18,
    "userInfos": {
        "firstName": "Cecilia",
        "lastName": "Ratorez",
        "age": 34
    },
    "score": 0.3,
    "keyData": {
        "calorieCount": 2500,
        "proteinCount": 90,
        "carbohydrateCount": 150,
        "lipidCount": 120
    }
}
 * @param {int} userId 
 * @returns {object}
 */
export const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user data", error);
    return null;
  }
};

/**
 * Effectue un call API pour récupérer les données sur la
 * route : http://localhost:3000/user/${userId}/activity
 * @param {int} userId 
 * @returns {object}
 */
export const fetchUserActivity = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/${userId}/activity`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user activity", error);
    return null;
  }
};

/**
 * Effectue un call API pour récupérer les données sur la
 * route : http://localhost:3000/user/${userId}/average-sessions
 * @param {int} userId 
 * @returns {object}
 */
export const fetchUserAverageSessions = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/${userId}/average-sessions`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user average sessions", error);
    return null;
  }
};

/**
 * Effectue un call API pour récupérer les données sur la
 * route : http://localhost:3000/user/${userId}/performance
 * @param {int} userId 
 * @returns {object}
 */
export const fetchUserPerformance = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/${userId}/performance`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user performance", error);
    return null;
  }
};
