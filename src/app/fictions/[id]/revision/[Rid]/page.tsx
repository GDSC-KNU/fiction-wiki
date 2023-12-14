"use client";

import { diffChars } from "diff";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { Fiction, User, FictionHistory } from "@prisma/client";
import ClipLoader from "react-spinners/ClipLoader";

interface Data {
  fiction: Fiction;
  history: FictionHistoryWithUser;
}

interface FictionHistoryWithUser extends FictionHistory {
  log: {
    changeLog: any[];
    charactersChanged: number;
  };
  editedBy: User;
}

export default function Revision() {
  const params = useParams();
  const { id, Rid } = params;

  const fetchKey = Rid && id ? `/api/fictions/${id}/histories/${Rid}` : null;
  const { data: historyData } = useSWR<Data>(fetchKey);

  if (!historyData)
    return (
      <div className="mt-20 flex items-center justify-center">
        <ClipLoader
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  const { history } = historyData || {};

  const differences = history ? historyData?.history.log.changeLog : [];

  const renderTextDiff = (
    oldValue: string | undefined,
    newValue: string | undefined
  ) => {
    const oldStr = JSON.stringify(oldValue) || "";
    const newStr = JSON.stringify(newValue) || "";

    const differences = diffChars(oldStr, newStr);
    let charsAdded = 0;
    let charsRemoved = 0;

    const renderedDiff = differences.map((part, index) => {
      if (part.added) {
        charsAdded += part.value.length;
      }
      if (part.removed) {
        charsRemoved += part.value.length;
      }

      return (
        <span
          key={index}
          style={{
            backgroundColor: part.added
              ? "lightgreen"
              : part.removed
              ? "lightcoral"
              : "transparent",
          }}
        >
          {part.value}
        </span>
      );
    });

    const netChange = charsAdded - charsRemoved;
    const changeLabel = netChange > 0 ? `+${netChange}` : netChange.toString();

    return (
      <div>
        {renderedDiff}
        <div>변경된 텍스트 분량: {changeLabel}</div>
      </div>
    );
  };

  return (
    <div className=" p-4">
      {differences && (differences as any).length > 0 ? (
        (differences as any).map((difference: any, index: number) => (
          <div className="" key={index}>
            <div className="flex-col">
              <strong>Path:</strong> {difference.path.join(".")} <br />
              <strong>Kind of change:</strong> {difference.kind} <br />
            </div>
            <div className="">
              <strong>변경내역:</strong>
              <div>{renderTextDiff(difference.lhs, difference.rhs)}</div>
              <br />
            </div>
          </div>
        ))
      ) : (
        <div>변경 이력이 없습니다.</div>
      )}
    </div>
  );
}
