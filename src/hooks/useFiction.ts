import useSWR from "swr";
import convertStringDateToInputDate from "@helper/convertStringDateToInputDate";
import { FictionWithMore } from "@/type/fiction";

export default function useFiction(fictionId: string) {
  const { data: fictionData, isValidating } = useSWR(
    `${process.env.NEXT_PUBLIC_HOST}/api/fictions/${fictionId}`,
    { suspense: true }
  );

  const defaultFiction = {
    image: undefined,
    title: undefined,
    originalTitle: undefined,
    relatedTitle: [],
    author: undefined,
    relatedAuthor: [],
    nationality: undefined,
    type: undefined,
    categories: [],
    original: undefined,
    platforms: [],
    currentState: undefined,
    synopsis: undefined,
    characters: undefined,
    date: [undefined, undefined],
    status: [undefined, undefined, undefined, undefined, undefined, undefined],
    volume: undefined,
    introduction: undefined,
    mediaMix: [],
    isTranslated: undefined,
    originalAuthor: undefined,
    setup: undefined,
    keywords: [],
    mcKeywords: [],
    subKeywords: [],
    consKeywords: [],
  };

  const preprocessFictionData = (fiction: FictionWithMore) => {
    if (!fiction) return null;

    return {
      image: fiction.image,
      title: fiction.title || "",
      originalTitle: fiction.originalTitle || "",
      relatedTitle: fiction.relatedTitle
        ?.split(",")
        .filter((item: any) => item.trim() !== ""),
      author: fiction.author?.name || "",
      relatedAuthor:
        fiction.relatedAuthor
          ?.split(",")
          .filter((item: any) => item.trim() !== "") || [],
      nationality: fiction.nationality || "",
      type: fiction.type || "",
      categories:
        fiction.categories?.map((c) => ({ value: c.category.name })) || [],
      original: fiction.original,
      platforms:
        fiction.platforms
          ?.split(",")
          .map((item: any) => ({ value: item.trim() })) || [],
      currentState: fiction.currentState,
      synopsis: fiction.synopsis,
      characters: fiction.characters,
      date: [
        convertStringDateToInputDate(fiction.startDate.toString()),
        convertStringDateToInputDate(fiction.endDate.toString()),
      ],
      status: [
        fiction.fictionStat.originality,
        fiction.fictionStat.writing,
        fiction.fictionStat.character,
        fiction.fictionStat.verisimilitude,
        fiction.fictionStat.synopsisComposition,
        fiction.fictionStat.value,
      ],
      volume: fiction.volume || 0,
      introduction: fiction.introduction || "",
      mediaMix:
        fiction.mediaMix
          ?.split(",")
          .map((item) => ({ value: item.trim() }))
          .filter((item) => item.value.trim() !== "") || [],
      isTranslated: fiction.isTranslated || "",
      originalAuthor: fiction.author.rawName || "",
      setup: fiction.setup || "",
      keywords:
        fiction.keywords
          .filter(
            (item) =>
              !item.keyword.isOfHeroine &&
              !item.keyword.isOfMC &&
              !item.keyword.isOfCons
          )
          .map((item) => item.keyword.name) || [],
      mcKeywords:
        fiction.keywords
          .filter((item) => item.keyword.isOfMC)
          .map((item) => item.keyword.name) || [],
      subKeywords:
        fiction.keywords
          .filter((item) => item.keyword.isOfHeroine)
          .map((item) => item.keyword.name) || [],
      consKeywords:
        fiction.keywords
          .filter((item) => item.keyword.isOfCons)
          .map((item) => item.keyword.name) || [],
    };
  };

  return preprocessFictionData(fictionData.fiction) || defaultFiction;
}
