export default function FictionFilteringModal2({
  close,
  isOpen,
}: {
  isOpen: boolean;
  close: () => void;
}) {
  return (
    <div className=" absolute right-0 top-20 flex flex-col">
      <div className=" flex flex-col">
        <div>국적</div>
      </div>
      <div className=" flex flex-col">
        <div>카테고리</div>
      </div>
      <div onClick={close}>닫기</div>
    </div>
  );
}
