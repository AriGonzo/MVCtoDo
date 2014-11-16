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
    $('#todo-list').show()
      .append('<li><div class="view"><input class="toggle" type="checkbox"><label>' +
      $input.val() + '</label><button class="destroy"></button></div><input class="edit" value="' +
      $input.val() + '" ></li>');

    //Clears the input field
    $input.val('');

    // Display the footer
    $('#footer').show();

    // update footer new count
    $('#todo-count strong').text($('#todo-list li').length);

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
   if ($('#todo-list li').hasClass('')) {
     $('#todo-list li').addClass('completed');
     $('.toggle').prop('checked', true);
   } else {
     $('.toggle').prop('checked', false);
     $('#todo-list li').removeClass('completed');
   }
 });

$('#todo-list').on('click', '.toggle', function(){
  $(this).closest('li').toggleClass('completed');
  if($('.completed').length === $('#todo-list li').length) {
    $('#toggle-all').prop('checked', true);
  } else {
    $('#toggle-all').prop('checked', false);
  }
});

// Show All Tasks in the List of Tasks
$('a[href="#/"]').click(function(){
    $('#todo-list li').each(function() {
      if($(this).hasClass('hidden')) $(this).removeClass('hidden');
    });
});

// Show only Active Tasks in the List of Tasks
$('a[href="#/active"]').click(function(){
    $('#todo-list li').each(function() {
      if($(this).hasClass('completed')) $(this).addClass('hidden');
      if(!$(this).hasClass('completed') && $(this).hasClass('hidden')) $(this).removeClass('hidden');
    });
});

// Show only Completed Tasks in the List of Tasks
$('a[href="#/completed"]').click(function(){
    $('#todo-list li').each(function() {
      if($(this).hasClass('')) $(this).addClass('hidden');
      if($(this).hasClass('completed hidden')) $(this).removeClass('hidden');
    });
});
