import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

import "../../style/profile.css";

/* Composants */
import ProfileBanner from "../../components/ProfileBanner";
import NutritionInfoCard from "../../components/NutritionInfoCard";
import DailyActivityChart from "../../components/DailyActivityChart";
import PerformanceChart from "../../components/PerformanceChart";
import ScoreChart from "../../components/scoreChart";
import AverageSessionsChart from "../../components/AverageSessionsCharts";

// Images
import caloriesIcon from '../../assets/img/nutritionIcons/calories-icon.png'
import proteinIcon from '../../assets/img/nutritionIcons/protein-icon.png'
import carbsIcon from '../../assets/img/nutritionIcons/carbs-icon.png'
import fatIcon from '../../assets/img/nutritionIcons/fat-icon.png'

const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

/**
 * Initialise toute la page et les composants correspondant au profil utilisateur
 * @returns {React.JSX.Element}
 */
export default function UserProfile() {
  const { userData, userActivity, userAverageSessions, userPerformance, loading} = useContext(DataContext);

  // Vérifie qu'il n'y a pas d'objet vide
  if(isEmpty(userData) || isEmpty(userActivity) || isEmpty(userAverageSessions) || isEmpty(userPerformance)){
    return (
      <main><h1>Erreur, il semblerait avoir un problème avec vos informations</h1></main>
    )
  }

  if(loading){
    return ''
  }
  console.log(userData, userActivity, userAverageSessions, userPerformance)

  return (
    <main>
      <ProfileBanner
        name={userData.userInfos.firstName}
        motivLine="Félicitation ! Vous avez explosé vos objectifs hier 👏"
      />
      <section className="mainContent">
        <div className="left-content">
          <DailyActivityChart data={userActivity}/>
          <div className="bottomCharts">
            <AverageSessionsChart data={userAverageSessions}/>
            <PerformanceChart data={userPerformance} />
            <ScoreChart score={userData.score ? userData.score : userData.todayScore}/>
          </div>
        </div>
        <div className="sideInfo">
          <NutritionInfoCard imgLink={caloriesIcon} value={userData.keyData.calorieCount} unitSymbol='kCal' valueType='Calories' />
          <NutritionInfoCard imgLink={proteinIcon} value={userData.keyData.proteinCount} unitSymbol='g' valueType='Protein' />
          <NutritionInfoCard imgLink={carbsIcon} value={userData.keyData.carbohydrateCount} unitSymbol='g' valueType='Glucides' />
          <NutritionInfoCard imgLink={fatIcon} value={userData.keyData.lipidCount} unitSymbol='g' valueType='Lipides' />
        </div>
      </section>
    </main>
  );
}
