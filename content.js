document.addEventListener("keydown", function(event) {
  if(event.keyCode === 37) { 
    var buttons = document.querySelectorAll('.c-player-answer, .c-player-subtitle-question');
    buttons[0].click();
  }
  else if(event.keyCode === 39) { 
    var buttons = document.querySelectorAll('.c-player-answer, .c-player-subtitle-question');
    buttons[1].click();
  }
  else if(event.keyCode === 38) { 
    document.querySelector('.c-player-next').click();
  }
  else if(event.keyCode === 40) { 
    document.querySelector('.c-player-play, .o-player__video').click();
	event.preventDefault();
  }
});