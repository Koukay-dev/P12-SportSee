import { createContext, useState, useEffect } from "react";
import { fetchUserData, fetchUserActivity, fetchUserAverageSessions, fetchUserPerformance } from "../../services/dataBus";

export const DataContext = createContext();

/**
 * Effectue tout les calls API en parallèle et va les rendre accessible à tout les 
 * composants grâce au context et va rafraichir les données si userId change
 * @param {int} userId 
 * @returns {object} qui va contenir { userData, userActivity, userAverageSessions, userPerformance }
 */
export const DataProvider = ({ children, userId }) => {
  const [userData, setUserData] = useState({});
  const [userActivity, setUserActivity] = useState({});
  const [userAverageSessions, setUserAverageSessions] = useState({});
  const [userPerformance, setUserPerformance] = useState({});
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Charger toutes les données en parallèle
    const loadData = async () => {
      const [data, activity, averageSessions, performance] = await Promise.all([
        fetchUserData(userId),
        fetchUserActivity(userId),
        fetchUserAverageSessions(userId),
        fetchUserPerformance(userId)
      ]);
      if (data) setUserData(data.data);
      if (activity) setUserActivity(activity.data);
      if (averageSessions) setUserAverageSessions(averageSessions.data);
      if (performance) setUserPerformance(performance.data);
      
      //Si la data a fini de charger
      setLoading(false)
    };

    loadData();
  }, [userId]);

  return (
    <DataContext.Provider value={{ userData, userActivity, userAverageSessions, userPerformance, loading}}>
      {children}
    </DataContext.Provider>
  );
};
