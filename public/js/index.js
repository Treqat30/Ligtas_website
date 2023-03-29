var clickedId = '';

function redirectPage(page) {
    window.location.replace(page);
}

[...document.getElementsByClassName('lbl')].forEach(function (el) {
    el.style.display = 'none';
});

function displayLbl(id) {
    id = id + '-label';
    document.getElementById(id).style.display = 'flex';
}

function removeLbl(id) {
    if (clickedId === id) {
        id = id + '-label';
        document.getElementById(id).style.display = 'fle';
    } else {
        id = id + '-label';
        setTimeout(() => {
            document.getElementById(id).style.display = 'none';
        }, 100);
    }
}


function navigateDisplay(type) {
    navigateDisplayRun(type);
}

function navigateDisplayRun(type) {
    [...document.getElementsByClassName('lbl')].forEach(function (el) {
        el.style.display = 'none';
    });

    [...document.getElementsByClassName('weather')].forEach(function (el) {
        el.style.display = 'none';
    });

    switch (type) {
        case 'temp':
            document.getElementById('temp').style.display = 'block';
            document.getElementById('summary').style.display = 'none';
            document.getElementById('time').style.display = 'none';
            document.getElementById('temp-label').style.display = 'flex';
            clickedId = 'temp';
            break;
        case 'wind':
            document.getElementById('wind').style.display = 'block';
            document.getElementById('summary').style.display = 'none';
            document.getElementById('time').style.display = 'none';
            document.getElementById('wind-label').style.display = 'flex';
            clickedId = 'wind';
            break;
        case 'water':
            document.getElementById('water').style.display = 'block';
            document.getElementById('summary').style.display = 'none';
            document.getElementById('time').style.display = 'none';
            document.getElementById('humidity-label').style.display = 'flex';
            clickedId = 'humidity';
            break;
        case 'rain':
            document.getElementById('rain').style.display = 'block';
            document.getElementById('summary').style.display = 'none';
            document.getElementById('time').style.display = 'none';
            document.getElementById('intensity-label').style.display = 'flex';
            clickedId = 'intensity';
            break;
        case 'level':
            document.getElementById('level').style.display = 'block';
            document.getElementById('summary').style.display = 'none';
            document.getElementById('time').style.display = 'none';
            document.getElementById('level-label').style.display = 'flex';
            clickedId = 'level';
            break;
        case 'pressure':
            document.getElementById('pressure').style.display = 'block';
            document.getElementById('summary').style.display = 'none';
            document.getElementById('time').style.display = 'none';
            document.getElementById('pressure-label').style.display = 'flex';
            clickedId = 'pressure';
            break;
    }
}

function getTime() {
    date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var endTime = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    time = hours + ' : ' + minutes + ' : ' + seconds + ' ' + endTime;
    document.getElementById('todaysTime').innerHTML = time;
}

setInterval(getTime, 1000);

const d = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let day = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();
let monthName = months[d.getMonth()];

document.getElementById('date').innerHTML = day + ', ' + monthName + ' ' + year;
