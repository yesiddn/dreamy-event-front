export default function toLocalDateTime(isoDate) {
  // Create a Date object from the ISO string
  const date = new Date(isoDate);

  // Get the local date parts
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are 0-indexed
  const year = date.getFullYear();

  // Get the local time parts
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Format the local date as a string (DD/MM/YYYY)
  const localDate = `${day.toString().padStart(2, '0')}/${month
    .toString()
    .padStart(2, '0')}/${year}`;

  // Format the local time as a string (HH:MM:SS)
  const localTime = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // Combine date and time
  const localDateTime = `${localDate} ${localTime}`;

  return localDateTime;
}