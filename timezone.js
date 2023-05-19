function getUserTimezone() {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return timeZone;
}

function displayUserTimezone() {
    const timezoneElement = document.getElementById("timezone");
    const timezone = getUserTimezone();
    timezoneElement.textContent = timezone;
}

displayUserTimezone();