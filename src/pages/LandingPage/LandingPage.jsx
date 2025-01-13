import { Header } from "../LandingPage/sections/header/Header";
import { Section3 } from "../LandingPage/sections/section3/section3";
import { Section4 } from "./sections/section4/section4";
import DiscordSend from "../LandingPage/sections/DiscordSend";
import { Footer } from "../LandingPage/sections/footer/Footer";

//TODO: 이후에 헤더, section2~4, 푸터까지 여기에 다 넣기
function LandingPage() {
  return (
    <>
      <Header />
      <Section3 />
      <Section4 />
      <DiscordSend />
      <Footer />
    </>
  );
}

export default LandingPage;
