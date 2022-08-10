module.exports = getDate;

function getDate() {
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"

  };
  let today = new Date();
  let currentDay = today.getDay();
  let day = today.toLocaleDateString("en-US", options);
  return day;
}
