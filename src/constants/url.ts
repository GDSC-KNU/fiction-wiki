export const URL = {
  // HOME: '/',
  // BOARD: '/boards',
  // BOARD_DETAIL: '/board/:id',
  // BOARD_POST: '/board',

  // ENTER: '/enter',

  // MYPAGE: '/profile/:id',

  DOMAIN: process.env.NEXT_PUBLIC_HOST,

  FICTIONS: "/fictions",
  FICTION_DETAIL: "/fictions/:id",
  FICTION_POST: "/fictions/create",

  AUTHORS: "/authors",
  AUTHOR_DETAIL: "/authors/name",

  SEARCH_TITLE: "/search/genre/:title/:page",
  SEARCH_KEYWORD: "/search/genre/:keyword/:page",
  SEARCH_GENRE: "/search/genre/:search/:page",

  TRANSLATION: "/translation",

  ENTER: "/enter",
  MYPAGE: "/profile",

  REVALIDATE: "/api/revalidate",
};
