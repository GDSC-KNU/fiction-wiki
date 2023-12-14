export const typeOptions = [
  { label: "웹소설", value: "웹소설" },
  { label: "일반소설", value: "일반소설" },
  { label: "웹툰", value: "웹툰" },
  { label: "일반만화", value: "일반만화" },
];

export const nationalityOptions = [
  { label: "중국", value: "중국" },
  { label: "일본", value: "일본" },
  { label: "한국", value: "한국" },
  { label: "영미권", value: "영미권" },
];

export const categoryOptions = [
  { label: "판타지", value: "판타지" },
  { label: "선협", value: "선협" },
  { label: "무협", value: "무협" },
  { label: "SF", value: "SF" },
  { label: "퓨전", value: "퓨전" },
  { label: "현대판타지", value: "현대판타지" },
  { label: "러브코미디", value: "러브코미디" },
  { label: "미정", value: "미정" },
];

export const isTranslatedOptions = [
  { label: "", value: null },
  { label: "번역", value: "번역" },
  { label: "미번", value: "미번" },
  { label: "번역(미디어믹스)", value: "번역(미디어믹스)" },
];

export const currentStateOptions = [
  { label: "완결", value: "완결" },
  { label: "미완", value: "미완" },
  { label: "연재중단", value: "연재중단" },
];

export const platformOptions = [
  { label: "카카오페이지", value: "카카오페이지" },
  { label: "시리즈", value: "시리즈" },
  { label: "문피아", value: "문피아" },
  { label: "노벨피아", value: "노벨피아" },
  { label: "조아라", value: "조아라" },
  { label: "치디엔", value: "치디엔" },
  { label: "타파스", value: "타파스" },
  { label: "소설가가 되자", value: "소설가가 되자" },
  { label: "하멜른", value: "하멜른" },
  { label: "기타", value: "기타" },
];

export const mediaMixOptions = [
  { label: "웹소설", value: "웹소설" },
  { label: "만화(웹툰)", value: "만화(웹툰)" },
  { label: "애니메이션", value: "애니메이션" },
  { label: "드라마", value: "드라마" },
  { label: "영화", value: "영화" },
  { label: "오디오북", value: "오디오북" },
];

export const userFictionStatOptions = [
  { value: "originality", kor: "독창성" },
  { value: "writing", kor: "필력" },
  { value: "verisimilitude", kor: "핍진성" },
  { value: "value", kor: "작품성" },
  { value: "synopsisComposition", kor: "스토리" },
  { value: "character", kor: "캐릭터성" },
];

const thisYear = new Date().getFullYear();
export const yearOptions = [
  { label: "전체", value: undefined },
  ...Array.from({ length: 15 }, (_, i) => thisYear - i).map((year) => ({
    label: year,
    value: year,
  })),
  // ...Array.from({ length: 30 }, (_, i) => thisYear - i)
];

export const threeYearOptions = [
  { label: "전체", value: undefined },
  ...Array.from({ length: 15 }, (_, i) => thisYear - i).map((year) => ({
    label: `${year - 2}~${year}`,
    value: year,
  })),
];

export const sortingOptions = [
  "총점",
  "캐릭터성",
  "독창성",
  "스토리",
  "작품성",
  "핍진성",
  "필력",
  "화수",
];

export const fictionsTabOptions = [
  { label: "연도별", value: "year" },
  // { label: "3년별", value: "month" },
];

export const fictionTabOptions = [
  { label: "작품정보", value: "fiction_info" },
  // { label: "위키", value: "wiki" },
  { label: "줄거리", value: "fiction_synopsis" },
  { label: "리뷰", value: "fiction_reviews" },
  { label: "키워드", value: "fiction_keywords" },
  { label: "MBTI 통계", value: "fiction_MBTI_stat" },
  { label: "유사작품", value: "fiction_similar_fictions" },
];

// const fictionPropertiesEx = ;

export const fictionProperties = {
  updatedAt: {
    label: "수정날짜",
    value: "updatedAt",
  },
  title: {
    label: "제목",
    value: "title",
  },
  setup: {
    label: "위키정보",
    value: "setup",
  },
  currentState: {
    label: "완결여부",
    value: "currentState",
  },
  startDate: {
    label: "시작일",
    value: "startDate",
  },
  endDate: {
    label: "완결일",
    value: "endDate",
  },
  keywords: {
    label: "키워드",
    value: "keywords",
  },
  categories: {
    label: "카테고리",
    value: "categories",
  },
};
