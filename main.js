let cubeWidth;
$(document).ready(()=>{
  cubeWidth = $('.wrapper').width();
  setTransform();
  setWrapper();
});

$(window).resize(()=>{
  cubeWidth = $('.wrapper').width();
  setTransform();
  setWrapper();
});

function setTransform(){
  $('.right').css('transform','translateX('+cubeWidth/2+'px) rotateY(90deg)');
  $('.front').css('transform','translateZ('+cubeWidth/2+'px)');
  $('.left').css('transform','translateX(-'+cubeWidth/2+'px) rotateY(-90deg)');
  $('.back').css('transform','translatez(-'+cubeWidth/2+'px) rotateX(180deg)');
}

function setWrapper(){
  $('.wrapper').css('transform','translateZ( -'+cubeWidth+'px)');
}

function collapseExpandTrigger(target){
  if($('.top').hasClass('rotateRight')){
    $('.top').removeClass('rotateRight');
  }else if($('.bottom').hasClass('rotateRight')){
    $('.bottom').removeClass('rotateRight');
  }
  $('.top').addClass('collapseUp');
  $('.bottom').addClass('collapseDown');
  if(target.parent().parent().hasClass('fill')){
    target.parent().parent().removeClass('fill');
    $('.top').removeClass('collapseUp');
    $('.bottom').removeClass('collapseDown');
    $('.top').addClass('expandDown');
    $('.bottom').addClass('expandUp');
    $('.middle').addClass('shrink');
    setTimeout(function(){
      $('.top').removeClass('expandDown');
      $('.bottom').removeClass('expandUp');
      $('.middle').removeClass('shrink');
    }, 2000);
  }else{
    target.parent().parent().addClass('fill');
  }
}

function collapseExpandOffTrigger(target){
  if($('.top').hasClass('rotateRight')){
    $('.top').removeClass('rotateRight');
  }else if($('.bottom').hasClass('rotateRight')){
    $('.bottom').removeClass('rotateRight');
  }
  target.parent().removeClass('fill');
  $('.top').removeClass('collapseUp');
  $('.bottom').removeClass('collapseDown');
  $('.top').addClass('expandDown');
  $('.bottom').addClass('expandUp');
  $('.middle').addClass('shrink');
  setTimeout(function(){
    $('.top').removeClass('expandDown');
    $('.bottom').removeClass('expandUp');
    $('.middle').removeClass('shrink');
  }, 800);
}

$('.wrapper').on('click', function(ele){
  var $target = $(ele.target);
  if($target.hasClass('trigger')){
    collapseExpandTrigger($target);
  }else if ($target.parent().hasClass('fill')) {
    collapseExpandOffTrigger($target);
  }else{
    $('.fill').removeClass('fill');
    if(!$target.parent().hasClass('rotateRight')){
      $target.parent().removeClass('rotateLeft');
      $target.parent().addClass('rotateRight');
    }else{
      $target.parent().removeClass('rotateRight');
      $target.parent().addClass('rotateLeft');
      setTimeout(function(){
        $target.parent().removeClass('rotateLeft');
      },900);
      setTimeout(function(){
        $('.top').removeClass('expandDown');
        $('.bottom').removeClass('expandUp');
      }, 2000);
    }
  }
});
