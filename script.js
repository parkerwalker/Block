$(onReady);

function onReady (){

$('.button').on('click', makeBox);

$('#putBox').on('click', '.box', blackBox);

$('#putBox').on('click', '#putBox', removeBox);
}

var randomColor = () => {
return '#'+(Math.random()*0xFFFFFF<<0).toString(16);


}
var makeBox = () => {
  var $box = $('<p>');
  var $color = randomColor();
  $box.addClass('box');
  $box.css('background-color', $color);
  $('#putBox').append($box);


}

var blackBox = () => {
$(this).css('background-color', 'black');
}

 var removeBox = () => {
  $(this).parent().remove();
  console.log('hello');
}
