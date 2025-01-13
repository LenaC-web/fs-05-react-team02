import { typoStyles } from "../../../../../../utils/Typo/Typo";

export function StatBox({ boxTitle, count }) {
  return (
    <div className="stat-box">
      <p className={typoStyles.textLgBold}>{boxTitle}</p>
      <div>
        <span className={`${typoStyles.textLgBold} box-text count`}>
          {count}
        </span>
        <span className={typoStyles.textLgBold} count>
          회
        </span>
      </div>
    </div>
  );
}
