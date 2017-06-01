$(document).ready(()=>{
  setTransform();
  setWrapper();
});

let cubeWidth = $('.wrapper').width();

function setTransform(){
  $('.right').css('transform','translateX('+cubeWidth/2+'px) rotateY(90deg)');
  $('.front').css('transform','translateZ('+cubeWidth/2+'px)');
  $('.left').css('transform','translateX(-'+cubeWidth/2+'px) rotateY(-90deg)');
  $('.back').css('transform','translatez(-'+cubeWidth/2+'px) rotateX(180deg)')
}

function setWrapper(){
  $('.wrapper').css('transform','translateZ( -'+cubeWidth+'px)');
}

$('.menu').on('click', function(){
  if(!$(this).hasClass('rotateRight')){
    $(this).removeClass('rotateLeft');
    $(this).addClass('rotateRight');
  }else{
    $(this).removeClass('rotateRight');
    $(this).addClass('rotateLeft');
  }
});



// $('.menu').on('click', function(){
//
// });
