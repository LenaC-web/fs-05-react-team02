import { typoStyles } from "../../../../../../utils/Typo/Typo";

export function LvPointBox({ boxTitle, currentPoint, totalPoint }) {
  //학습 포인트 퍼센트 계산
  const progressPercent = (currentPoint / totalPoint) * 100;

  return (
    <div className="point-box">
      <p className={typoStyles.textLgBold}>{boxTitle}</p>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
      <div>
        <span className={typoStyles.textLgBold}>{currentPoint}</span>
        <span className={`box-text light ${typoStyles.textLgBold}`}>
          /{totalPoint}p
        </span>
      </div>
    </div>
  );
}
