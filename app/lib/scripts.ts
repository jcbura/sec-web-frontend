export const getDecodedName = (team: string) => {
  return team.replace(/\s+/g, "_").toLowerCase();
};

export const formatDate = (
  sqlDate: string,
  length: "short" | "long" = "short"
) => {
  const dateParts = sqlDate.split("-").map(Number);
  const date = new Date(Date.UTC(dateParts[0], dateParts[1] - 1, dateParts[2]));

  const optionsDate: Intl.DateTimeFormatOptions = {
    month: length,
    day: "numeric",
    timeZone: "UTC",
  };

  const optionsDay: Intl.DateTimeFormatOptions = {
    weekday: length,
    timeZone: "UTC",
  };

  const formattedDate = date.toLocaleDateString("en-US", optionsDate);
  const formattedDay = date.toLocaleDateString("en-US", optionsDay);

  return [formattedDate, formattedDay];
};

export const formatTime = (sqlTime: string) => {
  if (sqlTime === "") return "TBD";

  const [hours, minutes, seconds] = sqlTime.split(":");
  const date = new Date();
  date.setHours(
    parseInt(hours, 10),
    parseInt(minutes, 10),
    parseInt(seconds, 10)
  );
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    second: undefined,
    hour12: true,
  };
  return date.toLocaleTimeString("en-US", options);
};
