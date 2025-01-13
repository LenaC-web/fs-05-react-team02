import { Section2 } from "../LandingPage/sections/section2/section2";
import { Section3 } from "../LandingPage/sections/section3/section3";
import { Section4 } from "../LandingPage/sections/section4/section4";
import DiscordSend from "../LandingPage/sections/DiscordSend";

//TODO: 이후에 헤더, section2~4, 푸터까지 여기에 다 넣기
function LandingPage() {
  return (
    <>
      <Section2 />
      <Section3 />
      <Section4 />
      <DiscordSend />
    </>
  );
}

export default LandingPage;
