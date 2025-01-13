import "./Header.css";
import { Typo, typoStyles } from "../../../utils/Typo/Typo";
import hiImg from "../utils/assets/hi.png";
import { USER_DATA } from "../utils/constants";
import { Link } from "react-router-dom";

const memberName = USER_DATA.memberName;

export function Header() {
  return (
    <header className="container">
      <nav>
        <div id="page-title">
          <img className="title-img" src={hiImg} alt="헤더 아이콘" />
          <Typo className={typoStyles.text2xlBold} content="하이하이" />
        </div>
        <div id="user-box">
          <div>
            <span className={typoStyles.text2xlBold}>{memberName}</span>
            <span className={typoStyles.text2xlRegular}>님</span>
          </div>
          <Link id="home-btn" className={typoStyles.textXlBold} to="/">
            HOME
          </Link>
        </div>
      </nav>
    </header>
  );
}
