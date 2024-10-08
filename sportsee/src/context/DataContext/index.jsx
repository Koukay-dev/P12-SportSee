import { createContext, useState, useEffect } from "react";
import { useMockedData } from "../../constant/useMockedData";
import User  from "../../models/User.js"
import { fetchUserData, fetchUserActivity, fetchUserAverageSessions, fetchUserPerformance } from "../../services/dataBus";
import { fetchMockedUserData, fetchMockedUserActivity, fetchMockedUserAverageSessions, fetchMockedUserPerformance } from "../../services/mockedDataBus";

export const DataContext = createContext();

const user = new User();

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
    // fonction pour récupérer les données de l'API
    const loadData = async () => {
      const [data, activity, averageSessions, performance] = await Promise.all([
        fetchUserData(userId),
        fetchUserActivity(userId),
        fetchUserAverageSessions(userId),
        fetchUserPerformance(userId)
      ]);
      if (data) {
        user.setUserData(data.data)
        setUserData(user.userData);
      }
      if (activity) {
        user.setUserActivity(activity.data)
        setUserActivity(user.userActivity)
      };
      if (averageSessions) {
        user.setUserAverageSessions(averageSessions.data)
        setUserAverageSessions(user.userAverageSessions)
      };
      if (performance) {
        user.setUserPerformance(performance.data)
        console.log(user)
        setUserPerformance(user.userPerformance)
      };
      
      //Si la data a fini de charger
      setLoading(false)
    };

    // Fonction pour récupérer les données mocké
    const loadMockedData = async () => {
      const [data, activity, averageSessions, performance] = await Promise.all([
        fetchMockedUserData(userId),
        fetchMockedUserActivity(userId),
        fetchMockedUserAverageSessions(userId),
        fetchMockedUserPerformance(userId)
      ]);
      if (data) {
        user.setUserData(data.data)
        setUserData(user.userData);
      }
      if (activity) {
        user.setUserActivity(activity.data)
        setUserActivity(user.userActivity)
      };
      if (averageSessions) {
        user.setUserAverageSessions(averageSessions.data)
        setUserAverageSessions(user.userAverageSessions)
      };
      if (performance) {
        user.setUserPerformance(performance.data)
        console.log(user)
        setUserPerformance(user.userPerformance)
      };
      
      //Si la data a fini de charger
      setLoading(false)
    };

    if(useMockedData){
      loadMockedData();
    } else {
      loadData();
    }
    
  }, [userId]);

  return (
    <DataContext.Provider value={{ userData, userActivity, userAverageSessions, userPerformance, loading}}>
      {children}
    </DataContext.Provider>
  );
};
