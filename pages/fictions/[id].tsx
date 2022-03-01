import type { NextPage } from "next";

const Fiction: NextPage = () => {
  const dummyKeyword = [
    "판타지",
    "무협",
    "수선류",
    "미스테리",
    "스릴러",
    "Sci-fi",
    "이세계",
    "좀비",
    "아포칼립스",
  ];

  interface dummyCommentI {
    [key: string]: string;
    익명1234: any;
    익명1235: any;
    익명1236: any;
    익명1237: any;
    익명1238: any;
  }

  const dummyComment: dummyCommentI = {
    익명1234: "안녕하세요, 반갑습니다, 추천합니다. 강추!!",
    익명1235: "안녕하세요, ㅎㅇㅎㅇ",
    익명1236: "ㅂㅊ",
    익명1237: "안녕하세요, 반갑습니다",
    익명1238: "안녕하세요",
  };

  return (
    <div className=" max-w-[1500px]">
      <div className=" grid grid-cols-1 sm:grid-cols-5 ">
        <div className=" bg-white col-span-2 mx-5 mt-7 h-fit">
          <img
            className=" min-h-[330px] w-full"
            src="https://picsum.photos/462/599?random=1"
          ></img>
          <div className=" px-4 py-3">
            <h2 className=" font-semibold text-2xl mb-2">끝이 아닌 시작</h2>
            <div className=" mb-2">CuttleFish</div>
            <div className=" mb-2">2021.01.12 ~ 2022.01.12</div>
            <div className=" mb-2">미국</div>
            <div className=" mb-2">500화 완결</div>
          </div>
        </div>
        <div className=" col-span-3 mx-5 mt-7">
          <div className=" grid xl:grid-cols-2 sm:grid-cols-1">
            <div className=" mb-10 pb-3 px- w-full bg-white">
              <h2 className=" font-bold pt-1 px-2">Keywords</h2>
              <ul className=" grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-5 pt-3 px-3">
                {dummyKeyword.map((item) => (
                  <li className=" text-sm text-center ring-2 ring-offset-1 mx-1 my-1 rounded-md h-fit">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className=" min-h-[176px] bg-white mb-10 xl:ml-10 w-full">
              <h2 className=" font-bold pt-1 px-2">graphs and charts</h2>
              <img
                className=" mx-auto"
                src="http://picsum.photos/350/350?random=1"
              ></img>
            </div>
          </div>
          <div className=" h-fit w-full bg-white">
            <h2 className=" font-bold pt-1 px-2"> Comments</h2>
            <ul>
              {Object.keys(dummyComment).map((item) => (
                <ul className=" flex place-content-between mx-2 border-b-2 pb-1 last:border-b-0 relative">
                  <li className=" mt-2 text-sm overflow-hidden mr-16">
                    {dummyComment[item]}
                  </li>
                  <li className=" mt-2 text-sm absolute right-24">{item}</li>
                  <li className=" mt-2 ml-5 text-sm min-w-[78px]">
                    👍 👎 (+3)
                  </li>
                </ul>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className=" mx-5 my-7 bg-white px-3 py-3">
        <div className=" ">
          <h2 className=" font-bold text-xl">줄거리</h2>
          <p>
            대만에서 천만 부, 중국에서 1억 부 이상 판매라는 경이로운 기록을 세운
            소설가 김용의 대표작 사조영웅전이 국내 최초 정식 계약본으로
            출간됐다. 영웅문이라는 이름으로 국내에 먼저 알려진 이 작품은 1959년
            작품으로 신조협려, 의천도룡기와 함께 '사조 삼부곡'이라 불린다.이번에
            정식본으로 출간된 asd은 번역과 감수에 상당한 노력을 기울였다.
            무협소설가 유광남과 무협 번역가 이덕옥의 책임 아래, 김용의 모든
            저작물들을 번역하고 내용의 고중과 감수를 맡아온 김용소설번역연구회가
            번역작업을 맡았고, 김홍중 호남대 교수가 감수했다. 또한 중국문화
            전문가로 활동하고 있는 김영수 전 영산원불교대학 교수가 자료조사와
            본문의 역사적 검증을 맡아 책의 가치를 높였으며, 임춘성 목포대 교수가
            작품 비평을 실었다.이외에도 복잡한 인물 관계를 한눈에 볼 수 있도록
            '인물 계보도'를 작성했으며, 책에 등장하는 여러 무공들을 쉽게 찾아볼
            수 있도록 '무공해설'을 덧붙였다. 거기에 더해 현재 중화권 최고의 무협
            삽화가로 인정받는 이지청 화백의 작품이 본문에 실려있으며, 부록으로
            김용 대하역사무협 사조영웅전 미리읽기를 증정한다.이 작품의 시대적
            배경은 송과 금, 몽고가 대치하던 시기로, 김용은 이 역사적 혼란기를
            흥미진진한 스토리 텔링으로 그려나가면서 '나라와 백성을 위하는 자가
            진정한 대협'이라는 주제의식을 전하고 있다. 이야기는 금나라 조왕에게
            아버지를 잃은 주인공 곽정과 그를 흠모하는 황용이 영웅으로 성장하는
            과정을 중심으로 전개되는데, 여기에 역사적 사실과 고수들의 이야기가
            긴밀하게 얽혀들어간다.칭기즈칸, 왕중양, 구처기, 악비 장군 등의 실존
            인물과 건곤오절로 불리는 동사 황약사, 서독 구양봉, 남제 단지홍, 북개
            홍칠공 등의 허구적 인물들이 부딪치며 빚어내는 파란만장한 이야기는,
            읽는 이의 눈길을 잡아 쉽게 놓아주지 않는다.
          </p>
        </div>
        <div className=" mt-3">
          <h3 className=" font-bold text-xl">등장인물</h3>
          <p>
            곤오절로 불리는 동사 황약사, 서독 구양봉, 남제 단지홍, 북개 홍칠공
            등의 허구적 인물들이 부딪치며 빚어내는 파란만장한 이야기는, 읽는
            이의 눈길을 잡아 쉽게 놓아주지 않는다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fiction;
