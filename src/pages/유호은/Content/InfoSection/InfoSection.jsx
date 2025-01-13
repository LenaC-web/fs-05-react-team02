import "./InfoSection.css";
import { Typo, typoStyles } from "../../../../utils/Typo/Typo";
import { getRandomQuoteAPI } from "../../utils/APIs/getRandomQuoteAPI";

const randomQuote = await getRandomQuoteAPI();

export function InfoSection() {
  return (
    <div className="info-box">
      <div id="info-top">
        <Typo className={typoStyles.text2xlSemibold} content={randomQuote} />
      </div>
    </div>
  );
}
