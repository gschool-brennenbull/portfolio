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

function closeModal() {
  if(!$('#meteor-mapper').hasClass('hidden')){
    $('#meteor-mapper').addClass('hidden');
    $('#meteor-mapper').addClass('shrinkModal');
    setTimeout(function() {
      $('#meteor-mapper').removeClass('shrinkModal');
    }, 900);
  }else if(!$('#muzica').hasClass('hidden')){
    $('#muzica').addClass('hidden');
    $('#muzica').addClass('shrinkModal');
    setTimeout(function() {
      $('#muzica').removeClass('shrinkModal');
    }, 900);
  }else if(!$('#pixel-art').hasClass('hidden')){
    $('#pixel-art').addClass('hidden');
    $('#pixel-art').addClass('shrinkModal');
    setTimeout(function() {
      $('#pixel-art').removeClass('shrinkModal');
    }, 900);
  }
}

function showThumbnail() {
  if($('.project-title').hasClass('hidden') ||
  $('.thumbnail-container').hasClass('hidden')){
    $('.project-title').removeClass('hidden');
    $('.thumbnail-container').removeClass('hidden');
    $('.logo').addClass('hidden');
  }
}

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
  }
  if($('.bottom').hasClass('rotateRight')){
    $('.bottom').removeClass('rotateRight');
  }

  $('.top').addClass('collapseUp');
  $('.bottom').addClass('collapseDown');
  if(target.closest('div.menu').hasClass('fill')){
    closeModal();
    showThumbnail();
    target.closest('div.menu').removeClass('fill');
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
    target.closest('div.menu').addClass('fill');
  }
}

function collapseExpandOffTrigger(target){
  // if($('.top').hasClass('rotateRight')){
  //   $('.top').removeClass('rotateRight');
  // }
  // if($('.bottom').hasClass('rotateRight')){
  //   $('.bottom').removeClass('rotateRight');
  // }
  // target.closest('div.menu').removeClass('fill');
  // closeModal();
  // showThumbnail();
  // $('.top').removeClass('collapseUp');
  // $('.bottom').removeClass('collapseDown');
  // $('.top').addClass('expandDown');
  // $('.bottom').addClass('expandUp');
  // $('.middle').addClass('shrink');
  // setTimeout(function(){
  //   $('.top').removeClass('expandDown');
  //   $('.bottom').removeClass('expandUp');
  //   $('.middle').removeClass('shrink');
  // }, 800);
}

$('.wrapper').on('click', function(ele){
  var $target = $(ele.target).closest('div');
  if($target.hasClass('trigger')){
    collapseExpandTrigger($target);
  }else if ($target.closest('div.menu').hasClass('fill')) {
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
      }, 900);
    }
  }
});

$('.thumbnail-container').on('click', '.thumbnail', function(ele){
  var $clickedThumb = ele.currentTarget;
  if($clickedThumb.id == '1'){
    $('#meteor-mapper').removeClass('hidden');
    $('.project-title').addClass('hidden');
    $('.thumbnail-container').addClass('hidden');
    $('.logo').removeClass('hidden');
    $('.top').removeClass('expandDown');
    $('.bottom').removeClass('expandUp');
    $('.middle').removeClass('shrink');
  }else if($clickedThumb.id == '2'){
    $('#muzica').removeClass('hidden');
    $('.project-title').addClass('hidden');
    $('.thumbnail-container').addClass('hidden');
    $('.logo').removeClass('hidden');
    $('.top').removeClass('expandDown');
    $('.bottom').removeClass('expandUp');
    $('.middle').removeClass('shrink');
  }else if($clickedThumb.id == '3'){
    $('#pixel-art').removeClass('hidden');
    $('.project-title').addClass('hidden');
    $('.thumbnail-container').addClass('hidden');
    $('.logo').removeClass('hidden');
    $('.top').removeClass('expandDown');
    $('.bottom').removeClass('expandUp');
    $('.middle').removeClass('shrink');
  }
});
