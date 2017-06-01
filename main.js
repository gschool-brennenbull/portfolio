$(document).ready(()=>{
  setX();
  setWrapper();
});

let cubeWidth = $('.wrapper').width();

function setX(){
  $('.back').css('transform','translateX('+cubeWidth/2+'px) rotateY(90deg)');
  $('.front').css('transform','translateZ('+cubeWidth/2+'px)');
}

function setWrapper(){
  $('.wrapper').css('transform','translateZ( -'+cubeWidth+'px)');
}
