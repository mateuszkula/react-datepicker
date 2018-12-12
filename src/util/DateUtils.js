const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export function getCurrentMonthWithYear() {
  const today = new Date();
  const month = months[today.getMonth()];
  const year = today.getFullYear();
  return `${month} ${year}`;
}

export function getPreviousMonth(monthWithYear) {
  let newMonth, newYear;
  let [ month, year ] = monthWithYear.split(" ");
  const monthIndex = months.indexOf(month)
  newMonth = monthIndex === 0 ? "December" : months[monthIndex - 1];
  newYear = monthIndex === 0 ? Number(year) - 1 : year;
  return `${newMonth} ${newYear}`;
}

export function getNextMonth(monthWithYear) {
  let newMonth, newYear;
  let [ month, year ] = monthWithYear.split(" ");
  const monthIndex = months.indexOf(month)
  newMonth = monthIndex === 11 ? "January" : months[monthIndex + 1];
  newYear = monthIndex === 11 ? Number(year) + 1 : year;
  return `${newMonth} ${newYear}`;
}