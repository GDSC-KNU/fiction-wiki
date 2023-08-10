export default function formatDate(dateStr: Date, detailed: boolean = false) {
  if (!dateStr) return "";

  const dateObj = new Date(dateStr);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const hour = dateObj.getHours();
  const minute = dateObj.getMinutes();

  return detailed
    ? `${year}. ${month}. ${day}. ${hour}:${minute}`
    : `${year}. ${month}. ${day}`;
}
