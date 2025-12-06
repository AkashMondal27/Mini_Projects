function updateClock() {
    const now = new Date();

    // TIME PART
    let hours = now.getHours();
    let mins = now.getMinutes();
    let secs = now.getSeconds();

    // Format to 2 digits
    hours = hours < 10 ? "0" + hours : hours;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    document.getElementById("clock").innerText = `${hours}:${mins}:${secs}`;

    // DATE PART
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    let dayName = days[now.getDay()];
    let monthName = months[now.getMonth()];
    let date = now.getDate();
    let year = now.getFullYear();

    document.getElementById("date").innerText = `${dayName}, ${date} ${monthName} ${year}`;
}

// Update every second
setInterval(updateClock, 1000);

// Run once immediately
updateClock();
