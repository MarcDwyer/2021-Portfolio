import React from "react";
import { ImageUrls } from "../../../app_data/urls";

import "./profile_styles.scss";
import { ThemeStruct } from "../../../themes";
import { observer } from "mobx-react-lite";
import { KonamiStore } from "../../../store/konami_store";

interface Props {
  theme: ThemeStruct;
  ks: KonamiStore;
}
const Profile = observer(({ theme, ks }: Props) => {
  console.log(ks.konami);
  return (
    <div className="profile-main">
      <img
        src={
          ks.konami ? "https://i.imgur.com/a7yVYHV.png" : ImageUrls.myProfile
        }
        alt="profile"
        style={{ border: `5px solid ${ks.konami ? "red" : theme.borderColor}` }}
      />
      <div className="profile-content">
        <div className="headers">
          <h2>{ks.konami ? "Roy Mustang" : "Marc Dwyer"}</h2>
          <h3>{ks.konami ? "Fire Alchemist" : "Web Developer"}</h3>
          <h4>{ks.konami ? "Amestris citizen" : "US/EU citizen"}</h4>
        </div>
      </div>
    </div>
  );
});

export default Profile;
