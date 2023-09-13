import { useEffect, useState } from "react";

const PAGE_GROUP_SIZE = 5;

export default function GlossariesPagination({
  showingCount,
  count,
  setQueryObject,
}: any) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(count / 10);
  const [startPage, setStartPage] = useState(1);

  useEffect(() => {
    // queryString be like '?originalTitle=exampleTitle&page=1'
    setQueryObject((prev: any) => {
      return { ...prev, page };
    });
  }, [page]);

  const hasNextGroup = startPage + PAGE_GROUP_SIZE <= totalPages;
  const hasPrevGroup = startPage > 1;

  const nextPageGroup = () => {
    if (!hasNextGroup) return alert("마지막 페이지 그룹입니다.");
    setStartPage((prevStartPage) =>
      Math.min(prevStartPage + PAGE_GROUP_SIZE, totalPages)
    );
  };

  const prevPageGroup = () => {
    if (!hasPrevGroup) return alert("첫 페이지 그룹입니다.");
    setStartPage((prevStartPage) =>
      Math.max(prevStartPage - PAGE_GROUP_SIZE, 1)
    );
  };

  return (
    <nav
      className="flex items-center justify-between pt-4"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {`${10 * (page - 1) + 1}-${10 * (page - 1) + showingCount}`}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {count}
        </span>
      </span>
      <ul className="inline-flex h-8 -space-x-px text-sm">
        <li>
          <button
            onClick={prevPageGroup}
            className="ml-0 flex h-8 items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            disabled={startPage === 1}
          >
            이전
          </button>
        </li>

        {Array.from(
          { length: PAGE_GROUP_SIZE },
          (_, idx) => idx + startPage
        ).map((item) => {
          if (item > totalPages) return null;

          return (
            <li key={item}>
              <a
                onClick={() => setPage(item)}
                className={
                  item === page
                    ? "flex h-8 items-center justify-center border border-gray-300 bg-blue-600 px-3 leading-tight text-gray-500 text-white hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    : "flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                }
              >
                {item}
              </a>
            </li>
          );
        })}
        <li>
          <button
            onClick={nextPageGroup}
            className="flex h-8 items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            disabled={startPage + PAGE_GROUP_SIZE > totalPages}
          >
            다음
          </button>
        </li>
      </ul>
    </nav>
  );
}
