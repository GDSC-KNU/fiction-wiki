import { useRecoilState, useRecoilValue } from "recoil";
import { queryObjectAtom, queryStringSelector } from "@store/atoms";

export function useQueryObject() {
  const [queryObject, setQueryObject] = useRecoilState(queryObjectAtom);
  const queryString = useRecoilValue(queryStringSelector);

  const updateArr = (key: string, value: string, isChecked: boolean) => {
    const currentValues = queryObject[key as "keywords" | "categories"] || [];
    return isChecked
      ? [...currentValues, value]
      : currentValues.filter((item: string) => item !== value);
  };

  const updateQueryObject = (target: EventTarget & HTMLInputElement) => {
    const { value, checked: isChecked, name } = target;

    const updatedQueryObject = {
      ...queryObject,
      page: 1, 
      [name]: ["keywords", "categories"].includes(name)
        ? updateArr(name, value, isChecked)
        : isChecked
        ? value
        : "",
    };

    setQueryObject(updatedQueryObject);
  };

  const updatePage = (value: number) =>
    setQueryObject({ ...queryObject, page: value });

  return {
    queryObject,
    queryString,
    updateQueryObject,
    updatePage,
  };
}
