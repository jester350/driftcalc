const events = [
  { name: "Qualifying", stime: "2023-05-26T19:30:00Z",etime: "2023-05-26T23:00:00Z" },
  { name: "Top 32", stime: "2023-05-27T14:30:00Z",etime: "2023-05-27T18:00:00Z"  },
  { name: "Top 16", stime: "2023-05-27T19:30:00Z" ,etime: "2023-05-27T23:00:00Z" },
];

const eventsData = JSON.parse(document.getElementById("events-data").textContent);

function displayLocalTime(eventTime) {
	
  const tzDiff = document.getElementById("eventtz").value
  const tts = new Date(eventTime.stime);
  //console.log(tts)
  const localTimeString = new Date(tts.getTime() + tzDiff * 60 * 60 * 1000).toLocaleString();
  
    
	const currentDate = new Date();
	//console.log(currentDate)
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
	//console.log(localTimeString)
	
  return localTimeString;
}


function displayLocalTimeEnd(eventTime) {

  const tzDiff = document.getElementById("eventtz").value
  const tts = new Date(eventTime.etime);
  //console.log(tts)
  const localTimeString = new Date(tts.getTime() + tzDiff * 60 * 60 * 1000).toLocaleString();
  
    
	const currentDate = new Date();
	//console.log(currentDate)
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
	//console.log(localTimeString)
	
  return localTimeString;
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
	
	
    eventTimeCellStart.textContent = displayLocalTime(event);
	eventTimeCellEnd.textContent = displayLocalTimeEnd(event);
  });
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

document.addEventListener("DOMContentLoaded", createTimetable);