import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
  return (
    <div className=" mt-40 flex h-screen justify-center">
      <ClipLoader
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
