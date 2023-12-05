import { useRecoilState, useRecoilValue } from "recoil";
import { queryObjectAtom, queryStringSelector } from "@store/atoms";

export function useQueryObject() {
  const [queryObject, setQueryObject] = useRecoilState(queryObjectAtom);
  const queryString = useRecoilValue(queryStringSelector);

  const updateArr = (key: string, value: string, isChecked: boolean) => {
    const currentValues = queryObject[key as "keywords" | "categories"] || [];
    return !isChecked
      ? [...currentValues, value]
      : currentValues.filter((item: string) => item !== value);
  };

  const updateQueryObject = (
    // target: EventTarget & HTMLInputElement
    {
      value,
      name,
      // ariaChecked,
      checked,
      dataset,
    }: {
      value: string;
      name: string;
      checked?: boolean;
      // ariaChecked: string;
      dataset: { value?: string; checked?: string };
    }
  ) => {
    const isChecked = dataset?.checked === "true" || checked === true;

    const updatedQueryObject = {
      ...queryObject,
      page: 1,
      [name]: ["keywords", "categories"].includes(name)
        ? updateArr(name, value, isChecked)
        : !isChecked
        ? value || dataset.value
        : "",
    };

    setQueryObject(updatedQueryObject);
  };

  const resetQueryObject = () => {
    setQueryObject({
      keywords: [],
      nationalities: "",
      categories: [],
      sorting: "",
      dateYear: "",
      page: 1,
      tab: "",
    });
  };

  const updatePage = (value: number) =>
    setQueryObject({ ...queryObject, page: value });

  return {
    queryObject,
    resetQueryObject,
    queryString,
    updateQueryObject,
    updatePage,
  };
}
