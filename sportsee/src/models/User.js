export default class User {
  constructor() {
    this.userData = {};
    this.userActivity = [];
    this.userAverageSessions = [];
    this.userPerformance = [];
  }

  setUserData(data) {
    const { todayScore, ...rest } = data;
    this.userData = {
      score: data.score ? data.score : todayScore,
      ...rest,
    };
  }

  setUserActivity(activityData) {
    this.userActivity = activityData.sessions.map((session) => {
      return {
        day: parseInt(session.day.split("-")[2]),
        kilogram: session.kilogram,
        calories: session.calories,
      };
    });
  }

  setUserAverageSessions(averageSessionsData) {
    const days = ["L", "M", "M", "J", "V", "S", "D"];
    this.userAverageSessions = averageSessionsData.sessions.map((session) => {
        return {
          day: days[session.day - 1],
          length: session.sessionLength,
        };
      });
  }
  setUserPerformance(performanceData) {
    const trad = {
        intensity: "Intensité",
        speed: "Vitesse",
        strength: "Force",
        endurance: "Endurance",
        energy: "Energie",
        cardio: "Cardio",
      };

      performanceData = performanceData.data.map((value, i) => {
        return {
          subject: trad[performanceData.kind[value.kind]],
          value: value.value,
          fullMark: 250,
        };
      });

      this.userPerformance = []
    
      Object.values(trad).forEach((subject) => {
        this.userPerformance.push(
          performanceData.find((element) => element.subject === subject)
        );
      });

  }
}
