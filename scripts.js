$(function() {

//binding the enter key to the input
  var $input = $('#new-todo');
  $input.keyup(function(e){
    if(e.keyCode == 13)  {
      $(this).trigger("addTask");
      }
    });

/* ensure there is more than whitespace in the input field (line 17)
// If yes, then
// display the main section
// add the input field value to the list item
// clear the input value
*/
  $input.bind("addTask",function(){
    if ($input.val().trim().length > 0 ){
      $('#main').css({display: 'block'});
      $('#todo-list').append('<li><div class="view"><input class="toggle" type="checkbox"><label>' +
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

// Toggling all of the Tasks on/off
   var $complete = $('#todo-list li');
   var $toggleAll = $('#toggle-all');
   $toggleAll.click(function() {
     if ($('#todo-list li').hasClass('')) {
       $('#todo-list li').addClass('completed');
       $('.toggle').prop('checked', true);
       $('#clear-completed').show();
       $('#clear-completed').html('Clear Completed (' + $('.completed').length + ')');

     } else {
       $('.toggle').prop('checked', false);
       $('#todo-list li').removeClass('completed');
       $('#clear-completed').hide();
       $('#clear-completed').html('Clear Completed (' + $('.completed').length + ')');

     }
   });

// Toggle individual Tasks on/off
  $('#todo-list').on('click', '.toggle', function(){
    $(this).closest('li').toggleClass('completed');

    //will start the clear completed counter once a task has been marked as complete
    $('#clear-completed').show().html('Clear Completed (' + $('.completed').length + ')');

    if(('.completed').length === 0) {
      $('#clear-completed').hide();
    }


    // if all individual tasks are checked off, the toggle-all icon will toggle
    if($('.completed').length === $('#todo-list li').length) {
      $('#toggle-all').prop('checked', true);
    } else {
      $('#toggle-all').prop('checked', false);
      $('#clear-completed').html('Clear Completed (' + $('.completed').length + ')');
    }

  });

  //clicking on the red "x" should remove the corresponding task item
  //calls the function destroyTask
  $('#todo-list').on('click', '.destroy', function(){
    destroyTask($(this));
    $('#clear-completed').show().html('Clear Completed (' + $('.completed').length + ')');


  });

  // functionality of the destroy button
  var destroyTask = function(destroyButton){
    destroyButton.parent().parent().removeClass('.completed').remove();
  };

  //clicking 'Clear Completed' will remove all checked-off tasks
  $('#clear-completed').on('click', function(){
    $('#todo-list li').filter('.completed').remove();
    $('#clear-completed').html('Clear Completed (' + $('.completed').length + ')');
    $('#clear-completed').hide();


  });



});
