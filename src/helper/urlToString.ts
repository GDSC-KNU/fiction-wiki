export default function urlToString(string: string) {
  if (!string) {
    return string;
  }

  if (string.includes("munpia")) string = "문피아";
  else if (string.includes("qidian")) string = "치디엔";
  else if (string.includes("series.naver")) string = "시리즈";
  else if (string.includes("kakao")) string = "카카오";
  else if (string.includes("novelpia")) string = "노벨피아";
  else if (string.includes("joara")) string = "조아라";
  else if (string.includes("tapas")) string = "타파스";
  return string;
}
