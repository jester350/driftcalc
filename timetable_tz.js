const eventsData = JSON.parse(document.getElementById("events-data").textContent);

function displayLocalTime(eventTime) {
  const tzDiff = document.getElementById("eventtz").value
  const tts = new Date(eventTime);
  const localTimeString = new Date(tts.getTime() + tzDiff * 60 * 60 * 1000).toLocaleString();
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat(navigator.language, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
  }).format(currentDate);
  localTimeString.textContent = formattedDate;	
  return localTimeString;
}

function getUserTimezone() {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return timeZone;
}

function displayUserTimezone() {
    const timezoneElement = document.getElementById("timezone");
    const timezone = getUserTimezone();
    timezoneElement.textContent = timezone;
}

function createTimetable() {
  const timetable = document.getElementById("timetable");
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  eventsData.forEach((event) => {
    const row = timetable.insertRow(-1);
    const eventNameCell = row.insertCell(0);
    const eventTimeCellStart = row.insertCell(1);
    const eventTimeCellEnd = row.insertCell(2);
    eventNameCell.textContent = event.name;
    eventTimeCellStart.textContent = displayLocalTime(event.stime);
    eventTimeCellEnd.textContent = displayLocalTime(event.etime);
  });
  displayUserTimezone();
}

document.addEventListener("DOMContentLoaded", createTimetable);
