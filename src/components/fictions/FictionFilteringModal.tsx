import Modal from "@components/common/Modal";
import { useQueryObject } from "@/hooks/useQueryObject";
import { Category, Keyword } from "@prisma/client";
import { Button2, buttonVariants } from "@components/common/Button2";

export default function FictionFilteringModal({
  staticData,
  isOpen,
  close,
}: {
  staticData: {
    keywordList: Keyword[];
    nationalityList: string[];
    categoryList: Category[];
  };
  isOpen: boolean;
  close: () => void;
  exit?: () => void;
}) {
  const {
    keywordList: keywords,
    nationalityList: nationalities,
    categoryList: categories,
  } = staticData;
  const { updateQueryObject, queryObject, resetQueryObject } = useQueryObject();

  const checkHandler = ({
    currentTarget,
    value,
    name,
    ariaChecked,
    dataset,
  }: any) => {
    if (currentTarget) updateQueryObject(currentTarget);
    else updateQueryObject({ value, name, dataset });
  };

  return (
    <div>
      <Modal isOpen={isOpen} close={close}>
        <div className=" flex flex-col space-y-4">
          <h4 className=" font-bold">국가</h4>
          <div className=" flex space-x-2">
            {nationalities.map((nationality, i) => (
              <Button2
                variant="outline"
                size="sm"
                key={nationality}
                onClick={(e) => checkHandler(e)}
                className=" font-bold "
                // id="nationality"
                value={nationality}
                name="nationalities"
                data-checked={queryObject.nationalities?.includes(nationality)}
              >
                {nationality}
              </Button2>
            ))}
          </div>
          <h4 className=" font-bold">카테고리</h4>
          <div className=" grid grid-cols-[repeat(3,minmax(120px,500px))] gap-1">
            {categories.map((category: any, i) => (
              <Button2
                key={category.name}
                variant="outline"
                size="sm"
                onClick={(e) => checkHandler(e)}
                className=" mx-1 mt-1 font-bold "
                value={category.name}
                name="categories"
                data-checked={queryObject.categories?.includes(category.name)}
              >
                {category.name}
              </Button2>
            ))}
          </div>
          <div className="flex flex-shrink-0 flex-wrap items-center justify-center rounded-b-md ">
            <Button2
              className=" w-full font-bold "
              onClick={resetQueryObject}
              variant="default"
              size="xs"
              // padding="none"
            >
              필터 초기화
            </Button2>
          </div>
        </div>
      </Modal>
    </div>
  );
}
