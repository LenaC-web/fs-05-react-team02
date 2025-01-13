import { getUserDataAPI } from "./APIs/getUserDataAPI";
import lv0Img from "./assets/lv0.png";
import lv1Img from "./assets/lv1.png";
import lv2Img from "./assets/lv2.png";
import lv3Img from "./assets/lv3.png";
import lv4Img from "./assets/lv4.png";
import lv5Img from "./assets/lv5.png";

export const USER_DATA = await getUserDataAPI();

export const CHAR_LEVEL = {
  0: {
    imgSrc: lv0Img,
    title: "알 코딩이",
    msgBubble: "난 아직 모가 없어 ㅜㅜ",
  },
  1: {
    imgSrc: lv1Img,
    title: "아기 코딩이",
    msgBubble: "미션해라~",
  },
  2: {
    imgSrc: lv2Img,
    title: "귀요미 코딩이",
    msgBubble: "난 귀여워",
  },
  3: {
    imgSrc: lv3Img,
    title: "어른 코딩이",
    msgBubble: "난 프로~",
  },
  4: {
    imgSrc: lv4Img,
    title: "괴물 코딩이",
    msgBubble: "크앙",
  },
  5: {
    imgSrc: lv5Img,
    title: "악마 코딩이",
    msgBubble: "으아앙",
  },
};

export const PROFILE_TEXT = {
  currentPoint: "코딩이 학습 레벨",
  answerCount: "질문에 답한 수",
  commentCount: "댓글 단 수",
};
