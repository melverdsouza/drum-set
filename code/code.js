let currentBeat = "65";

$(document).keydown(function(event) {
  // document.getElementById(event.keyCode).pause();
  $(`#${currentBeat}`)[0].pause();
  // document.getElementById(event.keyCode).currentTime = 0;
  $(`#${currentBeat}`)[0].currentTime = 0;
  $(`#${event.keyCode}`)[0].play();
  currentBeat = event.keyCode;
  console.log(event.keyCode);
});
