import "./Footer.css";
import { typoStyles } from "../../../utils/Typo/Typo";

const velogUrl = "https://velog.io/@dydms/posts";
const githubUrl = "https://github.com/HoeunRyu";

export function Footer() {
  return (
    <footer className="container">
      <a
        className={`footer-menu ${typoStyles.text2lgSemibold}`}
        href={velogUrl}
        target="_blank"
      >
        velog
      </a>
      <a
        className={`footer-menu ${typoStyles.text2lgSemibold}`}
        href={githubUrl}
        target="_blank"
      >
        Github
      </a>
    </footer>
  );
}
