let currentBeat = "65";

$(document).keydown(function(event) {
  let audio = $("body").find(`audio[id="${event.keyCode}"]`);
  audio[0].currentTime = 0;
  audio[0].play();
  if (!audio) return;
  let key = $("body").find(`div[data-key="${event.keyCode}"]`);
  key.addClass("playing");
  key.css("border", "3px solid gold");
  console.log(key);
  setTimeout(function() {
    key.removeClass("playing");
  }, 70);
  setTimeout(function() {
    key.css("border", "2px solid gray");
  }, 80);
});

function removeClass() {}
