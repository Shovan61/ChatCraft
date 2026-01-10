/* eslint-disable @typescript-eslint/no-explicit-any */

import dayjs from "dayjs";

function getOrdinal(n: any) {
  if (n > 3 && n < 21) return "th";
  switch (n % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export const formattedDate = (date: any) => {
  const d = dayjs(date);
  return d.format("D") + getOrdinal(d.date()) + " " + d.format("MMMM, YYYY");
};
