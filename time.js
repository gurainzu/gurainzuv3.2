function updateDateTimeJakarta() {
    var currentDate = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false, timeZone: 'Asia/Jakarta' };
    var dateTimeString = currentDate.toLocaleString('en-US', options);
    document.getElementById('day-time-jakarta').innerText = dateTimeString;
}

setInterval(updateDateTimeJakarta, 1000);
