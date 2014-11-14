//binding the enter key to the input

var $input = $('#new-todo');

$input.keyup(function(e){
  if(e.keyCode == 13)  {
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
    $('#todo-list').show().append('<li><label>' + $input.val() + '</label></li>');
    $input.val('');

//Adding Counter
    $('#footer').show().append('#filters');

  
  }
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

 $toggleAll.click(function() {
   if ($('#todo-list li').hasClass('completed')) {
     $('#todo-list li').removeClass('completed');
   } else {
     $('#todo-list li').addClass('completed');
   }
 });

$toggleAll.trigger('toggleComplete');


//Adding the "items left" Counter functionaliity.
//TODO:  
//If list item(#new-todo) length is eq to or greater (= > ) that 1 AND 
//enter is hit (e.keyCode) update counter(     )by +1.

//If 'x' (.destroy) is triggered then update counter (#todo-count) by -1.



//To show footer: $('#footer').show();
//To show text on footer: 
/*
$input.bind("addTask",function(){
  if ($input.val().trim().length > 0 ){
    $('#main').css({display: 'block'});
    $('#todo-list').show().append('<li><label>' + $input.val() + '</label></li>');
    $input.val('');

//Adding the counter to increment and decrement
    $('#footer').show();
  }
});



/*

if (#new-todo.val().trim().length >= 1 && ('       '.click(function()) {



 $('#filters').val(parseInt($('#todo-count').val()) + 1);
        $('#footer').show();
});



/*

  $('#new-todo').click(function(){
        $('#todo-count').val(parseInt($('#todo-count').val()) + 1);
        $('#footer').show();
    });


    $('.destroy').click(function(){
        if ($('#todo-count').val() != 0)
            $('#todo-count').val(parseInt($('#todo-count').val()) - 1);
    });
  
});

*/


// $('#todo-list li').addClass('completed)

