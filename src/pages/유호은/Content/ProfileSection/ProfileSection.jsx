import "./ProfileSection.css";
import { CharProfile } from "./CharProfile/CharProfile";
import { CharStats } from "./CharStats/CharStats";
import { USER_DATA } from "../../utils/constants";

const developLevel = Math.floor(Math.random() * 6);
const currentPoint = (USER_DATA.answerCount + USER_DATA.commentCount) / 2;

export function ProfileSection() {
  return (
    <div className="profile-box">
      <CharProfile userLv={developLevel} />
      <CharStats currentPoint={currentPoint} userData={USER_DATA} />
    </div>
  );
}
