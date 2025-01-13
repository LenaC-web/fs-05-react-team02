import { Typo, typoStyles } from "../Typo/Typo";
import "./footer.css";

export function Footer() {
  return (
    <div id="footer">
      <div className="item">
        <p>스프린트</p>
        <p className={typoStyles.textLgMedium}>서비스 이용약관</p>
        <p className={typoStyles.textLgMedium}>개인정보 처리방침</p>
      </div>
      <div id="contract" className="item, {typoStyles.textLgMedium}">
        <div>
          <p>TEL</p>
          <p>E-mail</p>
          <p>Address</p>
        </div>
        <div>
          <p>010.1111.22222</p>
          <p>google@gmail.com</p>
          <p>서울특별시 은하계 부산 대구 로스엔젤레스</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
