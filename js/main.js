var redButton = document.querySelector('.one')
var whiteButton = document.querySelector('.two')
var blueButton = document.querySelector('.three')
var yellowButton = document.querySelector('.four')

redButton.addEventListener("click", clickRed)
whiteButton.addEventListener("click", clickWhite)
blueButton.addEventListener("click", clickBlue)
yellowButton.addEventListener("click", clickYellow)

function clickRed() {
  document.body.style.backgroundColor = "red"
  document.body.style.color = "white"
}

function clickWhite() {
  document.body.style.backgroundColor = "white"
  document.body.style.color = "black"
}

function clickBlue() {
  document.body.style.backgroundColor = "blue"
  document.body.style.color = "white"
}

function clickYellow() {
  document.body.style.backgroundColor = "yellow"
  document.body.style.color = "black"
}
