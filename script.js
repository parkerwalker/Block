$(onReady);

function onReady (){

$('.button').on('click', makeBox);

$('#putBox').on('click', '.box', blackBox);

$('#x').on('click', removebox);
}

function randomColor(){
return '#'+(Math.random()*0xFFFFFF<<0).toString(16);

}
function makeBox(){
  var $box = $('<p>');
  var $exit = $('<div>x</div>');
  var $color = randomColor();
  $box.addClass('box');
  $box.css('background-color', $color);
  $('#putBox').append($box);
  
}

function blackBox() {
$(this).css('background-color', 'black');
}

function removeBox(){
  $(this).remove()
}
