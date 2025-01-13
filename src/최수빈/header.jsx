import { Typo, typoStyles } from "../Typo/Typo";
import "./header.css";

export function Header() {
  return (
    <div>
      <div id="nav">
        <button className="teamButton" type="button">
          <Typo
            className={`buttonText ${typoStyles.textXlBold}`}
            content="1팀"
          />
        </button>
      </div>
      <div id="section1">
        <div>
          코딩실력을 키우는 <span id="hot">HOT</span> 🔥 핫 캠프
          <br />
          파트2 우리 2팀을 소개해요.
        </div>
      </div>
    </div>
  );
}

export default Header;
