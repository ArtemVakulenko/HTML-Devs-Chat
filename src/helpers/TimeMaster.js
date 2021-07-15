export const getTimeString = (date) => {
  const msgDate = new Date(date);
  let month = msgDate.getMonth() + 1;
  let day = msgDate.getDate();
  let hours = msgDate.getHours();
  let minutes = msgDate.getMinutes();
  if (month < 10) month = `0${month}`;
  if (day < 10) day = `0${day}`;
  if (hours < 10) hours = `0${hours}`;
  if (minutes < 10) minutes = `0${minutes}`;
  const dateToShow = `${day}.${month} ${hours}:${minutes}`;
  return dateToShow;
};
