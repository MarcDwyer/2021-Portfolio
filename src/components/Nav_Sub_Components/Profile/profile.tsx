import { useEffect, useState } from "react";
import { ImageUrls } from "../../../app_data/urls";

import "./profile_styles.scss";
import { ThemeStruct } from "../../../themes";
import { observer } from "mobx-react-lite";
import { KonamiStore } from "../../../store/konami_store";

interface Props {
  theme: ThemeStruct;
  ks: KonamiStore;
}
const initialProfileDetails = {
  name: "Marc Dwyer",
  profession: "Web Developer",
  citizenship: "US/EU",
  image: ImageUrls.myProfile as string,
};
type ProfileDetails = typeof initialProfileDetails;

function useProfileDetails(ks: KonamiStore) {
  const [profileDetails, setProfileDetails] = useState<ProfileDetails>({
    ...initialProfileDetails,
  });

  useEffect(() => {
    if (ks.konami) {
      setProfileDetails({
        name: "Roy Mustang",
        profession: "Fire Alchemist",
        citizenship: "Amestris citizen",
        image: "https://i.imgur.com/a7yVYHV.png",
      });
    }
  }, [ks.konami]);

  return profileDetails;
}
const Profile = observer(({ theme, ks }: Props) => {
  const profile = useProfileDetails(ks);
  return (
    <div className="profile-main">
      <img
        src={profile.image}
        alt="profile"
        style={{ border: `5px solid ${ks.konami ? "red" : theme.borderColor}` }}
      />
      <div className="profile-content">
        <div className="headers">
          <h2>{profile.name}</h2>
          <h3>{profile.profession}</h3>
          <h4>{profile.citizenship}</h4>
        </div>
      </div>
    </div>
  );
});

export default Profile;
