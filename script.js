//your JS code here. If required.
const td = document.getElementById("timer");

setInterval(function () {
    const currentDate = new Date();
    td.innerHTML = currentDate.toLocaleString();
}, 1000);