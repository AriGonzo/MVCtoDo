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


//Show footer and update the "todo-count"...when newTask is executed
    $('#footer').show(); //Show footer
    $('#new-todo').click(function() { //Everytime new list item is executed (#new-todo)
    $('#todo-count strong')counter++ });//Add ++1 to the counter (<strong>1</strong>)

}   

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


// $('#todo-list li').addClass('completed)



