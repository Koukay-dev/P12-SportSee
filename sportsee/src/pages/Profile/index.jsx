import "../../style/profile.css";
import { useState } from "react";
import ProfileBanner from "../../components/ProfileBanner";
import { useContext, useEffect } from "react";

export default function UserProfile() {
  const [ userData, setUserData ] = useState({});

  useEffect(() => {
    // id 12 et 18 pour les calls
    fetch(`http://localhost:3001/user/18`)
      .then((response) => response.json())
      .then(( { data }) => {
        setUserData(data);
      });
  }, []);
  console.log(userData)
  return (
    <main>
      <ProfileBanner
        name={userData.userInfos.firstName}
        motivLine="Félicitation ! Vous avez explosé vos objectifs hier 👏"
      />
    </main>
  );
}
