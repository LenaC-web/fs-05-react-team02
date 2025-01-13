import { Typo, typoStyles } from "../../../../utils/Typo/Typo";
import "./Footer.css";

export function Footer() {
  return (
    <div id="footer">
      <div class="column">
        <p class="text-lg medium">스프린트</p>
        <p class="{text-md medium">서비스 이용약관</p>
        <p class="text-md medium">개인정보 처리방침</p>
      </div>
      <div class="column">
        <div class="row">
          <p class="text-md medium">TEL</p>
          <p class="text-md medium">010.1111.2222</p>
        </div>
        <div class="row">
          <p class="text-md medium">E-mail</p>
          <p class="text-md medium">google@gmail.com</p>
        </div>
        <div class="row">
          <p class="text-md medium">Address</p>
          <p class="text-md medium">서울특별시 은하계 부산 대구 로스엔젤레스</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
