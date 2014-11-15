//binding the enter key to the input

var $input = $('#new-todo');

$input.keyup(function(e){
  if(e.keyCode == 13) {
    $(this).trigger("addTask");
    }
  });

/* ensure there is more than whitespace in the input field
// If yes, then
// display the main section
// add the input field value to the list item
// clear the input value
*/
$input.bind("addTask",function(){
  if ($input.val().trim().length > 0 ){
    $('#main').css({display: 'block'});
    $('#todo-list').show().append('<li><div class="view"><label>' + $input.val() + '</label><button class="destroy"></button></div></li>');
    $input.val('');
  }
});

var $destroy = $('.destroy');

$('.destroy').click(function(){
  alert('FUCK');
});

/*
//
// TODO: Add the :before icon button when creating the <li>
//       Create the click functionality for the button to fire an event
//       #todo-list > li should be listening for an event to fire and toggle class
//       #toggle-all icon needs click functionality to toggle class of all <li>
*/
 var $complete = $('#todo-list li');
 var $toggleAll = $('#toggle-all');

 $toggleAll.bind('toggleComplete', function() {
   $complete.toggleClass('completed');
 });

$toggleAll.trigger('toggleComplete');
