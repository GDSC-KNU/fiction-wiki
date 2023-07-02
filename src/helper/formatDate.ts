export default function formatDate(dateStr: Date) {
  if (!dateStr) return "";

  const dateObj = new Date(dateStr);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();

  return `${year}. ${month}. ${day}`;
}
