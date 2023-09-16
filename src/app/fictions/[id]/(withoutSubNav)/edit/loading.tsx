import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
  return (
    <div className="  flex h-screen items-center justify-center  pb-96">
      <ClipLoader
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
