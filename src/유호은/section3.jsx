import "./section3.css";
import { Typo, typoStyles } from "../Typo/Typo";
import { TEAM_MEMBERS } from "./constants";
import { MemberCard } from "./MemberCard";

export function Section3() {
  return (
    <div id="section3">
      <div className="content">
        <Typo
          className={`section-sub-title ${typoStyles.textXlBold}`}
          content="팀원 소개"
        />
        <Typo
          className={`section-title ${typoStyles.text3xlBold}`}
          content="팀원들을 소개해요"
        />
        <div id="member-cards-box">
          {TEAM_MEMBERS.map((member, idx) => (
            <MemberCard
              key={idx}
              img={member.img}
              name={member.name}
              comment={member.comment}
              mbti={member.mbti}
              page={member.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
