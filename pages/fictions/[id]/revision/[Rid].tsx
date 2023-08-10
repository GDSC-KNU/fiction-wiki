import deepDiff from "deep-diff";
import { diffChars } from "diff";
import { NextPage } from "next";
import { useRouter } from "next/router";
import useSWR from "swr";
import {
  Author,
  Category,
  Fiction,
  FictionStat,
  Keyword,
  User,
  FictionHistory,
} from "@prisma/client";

interface Data {
  fiction: Fiction;
  history: FictionHistoryWithUser;
}

interface LogItem {
  path: string;
}

interface FictionHistoryWithUser extends FictionHistory {
  log: {
    changeLog: any[];
    charactersChanged: number;
  };
  editedBy: User;
}

const Revision: NextPage = () => {
  const router = useRouter();
  const { id, Rid } = router.query;

  const fetchKey = router.query ? `/api/fictions/${id}/histories/${Rid}` : null;
  const { data: historyData } = useSWR<Data>(fetchKey);
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
        <div>Character change: {changeLabel}</div>
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
        <div>No changes found or loading...</div>
      )}
    </div>
  );
};

export default Revision;
