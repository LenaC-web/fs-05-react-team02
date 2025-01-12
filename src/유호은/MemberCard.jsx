import { Link } from "react-router-dom";
import { Typo, typoStyles } from "../Typo/Typo";

export function MemberCard({ img, name, comment, mbti, page }) {
  const memberNameClassName = `member-name ${typoStyles.text2xlBold}`;
  const memberCommentClassName = `member-comment ${typoStyles.textLgSemibold}`;
  const memberMbtiClassName = `member-mbti ${typoStyles.textMdMedium}`;

  return (
    <Link className="member-card" to={`/${page}`}>
      <img className="member-card-img" src={img} />

      <div className="member-card-text-box">
        <Typo className={memberNameClassName} content={name} />
        <Typo className={memberCommentClassName} content={comment} />
        <Typo className={memberMbtiClassName} content={`#${mbti}`} />
      </div>
    </Link>
  );
}
