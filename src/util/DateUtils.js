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

export function getMontWithYearAsNumbers(monthWithYear) {
  let [month, year] = monthWithYear.split(" ");
  let monthAsNumber = Number(months.indexOf(month)) + 1;
  return [monthAsNumber, year];
}

export function getCurrentMonthWithYear() {
  const today = new Date();
  const month = months[today.getMonth()];
  const year = today.getFullYear();
  return `${month} ${year}`;
}

export function getAnotherMonth(monthWithYear, action) {
  let newMonth, newYear;
  let [month, year] = monthWithYear.split(" ");
  const monthIndex = months.indexOf(month);
  if (action === "next") {
    newMonth = monthIndex === 11 ? "January" : months[monthIndex + 1];
    newYear = monthIndex === 11 ? Number(year) + 1 : year;
  } else {
    newMonth = monthIndex === 0 ? "December" : months[monthIndex - 1];
    newYear = monthIndex === 0 ? Number(year) - 1 : year;
  }
  return `${newMonth} ${newYear}`;
}

export function getFirstDayOfMonth(monthWithYear) {
  let [monthAsNumber, year] = getMontWithYearAsNumbers(monthWithYear);
  return new Date(year, monthAsNumber-1, 1).getDay();
}

export function getNumberOfDaysInMonth(monthWithYear) {
  let [monthAsNumber, year] = getMontWithYearAsNumbers(monthWithYear);
  return new Date(year, monthAsNumber, 0).getDate();
}
