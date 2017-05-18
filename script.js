$(onReady);

function onReady (){

$('.button').on('click', makeBox);

$('#putBox').on('click', '.box', blackBox);

$('#putBox').on('click', '.x', removeBox);

}

function randomColor(){
return '#'+(Math.random()*0xFFFFFF<<0).toString(16);


}
function makeBox(){
  var $box = $('<p>');
  var $color = randomColor();
  $box.addClass('box');
  $box.css('background-color', $color);
  $('#putBox').append($box);

  var $exit = $('<div>x</div>');
  $box.addClass('x');
  $box.append($exit);
}

function blackBox() {
$(this).css('background-color', 'black');
}

function removeBox(){
  $(this).parent().remove();
  console.log('hello');
}
