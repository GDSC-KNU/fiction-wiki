export default function convertStringDateToInputDate(stringDate: string) {
  return new Date(stringDate).toISOString().substring(0, 10);
}
