export default function urlToString(string: string) {
  if (!string) {
    return string;
  }

  if (string.includes("munpia")) return "문피아";
  else if (string.includes("qidian")) return "치디엔";
  else if (string.includes("series.naver")) return "시리즈";
  else if (string.includes("kakao")) return "카카오";
  else if (string.includes("novelpia")) return "노벨피아";
  else if (string.includes("joara")) return "조아라";
  else if (string.includes("tapas")) return "타파스";
  else if (string.includes("royalroad")) return "로열로드";
  else if (string.includes("syosetu.com")) return "소설가가 되자";
  return "바로가기";
}
