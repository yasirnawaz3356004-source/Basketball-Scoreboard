let homeSum = document.getElementById("home-sum-el");

let guestSum = document.getElementById("guest-sum-el");

let homeCount = 0;

let guestCount = 0;

function add1Home() {
  homeSum.textContent = homeCount += 1;
}

function add2Home() {
  homeSum.textContent = homeCount += 2;
}

function add3Home() {
  homeSum.textContent = homeCount += 3;
}

function add1Guest() {
  guestSum.textContent = guestCount += 1;
}

function add2Guest() {
  guestSum.textContent = guestCount += 2;
}

function add3Guest() {
  guestSum.textContent = guestCount += 3;
}

function reset() {
  homeCount = 0
  guestCount = 0
  guestSum.textContent = guestCount;
  homeSum.textContent = homeCount;
}