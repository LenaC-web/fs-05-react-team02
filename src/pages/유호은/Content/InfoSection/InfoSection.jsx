import "./InfoSection.css";
import { Typo, typoStyles } from "../../../../utils/Typo/Typo";
import { getRandomQuoteAPI } from "../../utils/APIs/getRandomQuoteAPI";
import { CheckBox } from "./CheckBox";
import { CHECK_BOX_LIST } from "../../utils/constants";

const randomQuote = await getRandomQuoteAPI();

export function InfoSection() {
  return (
    <div className="info-box">
      <div id="info-top">
        <Typo className={typoStyles.text2xlSemibold} content={randomQuote} />
      </div>
      <div id="info-wrapper">
        <div className="info-content">
          <Typo className={typoStyles.text2lgSemibold} content="안녕하세요" />
          <Typo
            className={typoStyles.text2lgSemibold}
            content="저는 일산 살구여"
          />
          <Typo className={typoStyles.text2lgSemibold} content="99년생이고요" />
          <Typo
            className={typoStyles.text2lgSemibold}
            content="팀플 어려워요"
          />
          <Typo
            className={typoStyles.text2lgSemibold}
            content="디자인도 너무 어려워요"
          />
          <Typo
            className={typoStyles.text2lgSemibold}
            content="자기소개 모르겠어여"
          />
          <Typo className={typoStyles.text2lgSemibold} content="화이팅" />
        </div>

        <div className="info-content">
          <Typo className={typoStyles.text2xlBold} content="TODO" />
          {CHECK_BOX_LIST.map((item, idx) => (
            <CheckBox key={idx}>
              <span className={typoStyles.textXlSemibold}>{item}</span>
            </CheckBox>
          ))}
        </div>
      </div>
    </div>
  );
}
