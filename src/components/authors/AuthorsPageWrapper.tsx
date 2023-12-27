// import { Suspense } from "react";

// import ClipLoader from "react-spinners/ClipLoader";
import AuthorsDisplayer from "@components/authors/AuthorsDisplayer";

export default function AuthorsPageWrapper({
  fallbackData,
}: {
  fallbackData: any[];
}) {
  return (
    <div className=" flex flex-col">
      {/* <Suspense fallback={<ClipLoader />}> */}
      <AuthorsDisplayer fallbackData={fallbackData} />
      {/* </Suspense> */}
    </div>
  );
}
``;
