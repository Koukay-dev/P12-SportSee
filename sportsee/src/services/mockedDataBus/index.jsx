import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../../mockedData/mockedData";

/**
 * Retourne les données mocké du système de fichier local
 * pour UserData
}
 * @param {int} userId 
 * @returns {object}
 */
export const fetchMockedUserData = async (userId) => {
    let userData = {}
    if(userId === 12){
        userData = USER_MAIN_DATA[0]
    } else if (userId === 18){
        userData = USER_MAIN_DATA[1]
    }

  return userData
};

/**
 * Retourne les données mocké du système de fichier local
 * pour UserActivity
 * @param {int} userId 
 * @returns {object}
 */
export const fetchMockedUserActivity = async (userId) => {
    let userActivity = {}
    if(userId === 12){
        userActivity = USER_ACTIVITY[0]
    } else if (userId === 18){
        userActivity = USER_ACTIVITY[1]
    }

  return userActivity
};

/**
 * Retourne les données mocké du système de fichier local
 * pour UserAverageSessions
 * @param {int} userId 
 * @returns {object}
 */
export const fetchMockedUserAverageSessions = async (userId) => {
    let userAverageSessions = {}
    if(userId === 12){
        userAverageSessions = USER_AVERAGE_SESSIONS[0]
    } else if (userId === 18){
        userAverageSessions = USER_AVERAGE_SESSIONS[1]
    }

  return userAverageSessions
};

/**
 * Retourne les données mocké du système de fichier local
 * pour UserPerformance
 * @param {int} userId 
 * @returns {object}
 */
export const fetchMockedUserPerformance = async (userId) => {
    let userPerformance = {}
    if(userId === 12){
        userPerformance = USER_PERFORMANCE[0]
    } else if (userId === 18){
        userPerformance = USER_PERFORMANCE[1]
    }

  return userPerformance
};
