import { PROFILE_TEXT } from "../../../utils/constants";
import { StatBox } from "./StatBox/StatBox";
import { LvPointBox } from "./LvPointBox/LvPointBox";

export function CharStats({ currentPoint, userData }) {
  return (
    <div id="char-stats">
      <LvPointBox
        boxTitle={PROFILE_TEXT.currentPoint}
        currentPoint={currentPoint}
        totalPoint={userData.totalPoint}
      />
      <StatBox
        boxTitle={PROFILE_TEXT.answerCount}
        count={userData.answerCount}
      />
      <StatBox
        boxTitle={PROFILE_TEXT.commentCount}
        count={userData.commentCount}
      />
    </div>
  );
}
