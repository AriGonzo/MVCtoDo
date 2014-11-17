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
       $('#todo-count strong').text($('#todo-list li').length - $('.completed').length);
     } else {
       $('.toggle').prop('checked', false);
       $('#todo-list li').removeClass('completed');
       $('#todo-count strong').text($('#todo-list li').length - $('.completed').length);
     }
   });

// Toggle individual Tasks on/off
  $('#todo-list').on('click', '.toggle', function(){
    $(this).closest('li').toggleClass('completed');
    $('#todo-count strong').text($('#todo-list li').length - $('.completed').length);

    // if all individual tasks are checked off, the toggle-all icon will toggle
    if($('.completed').length === $('#todo-list li').length) {
      $('#toggle-all').prop('checked', true);
    } else {
      $('#toggle-all').prop('checked', false);
    }
  });

});

// Show All Tasks in the List of Tasks
$('a[href="#/"]').click(function(event){
    $(this).addClass('selected');
    $('#todo-list li').each(function() {
      if($(this).hasClass('hidden')) $(this).removeClass('hidden');
    });
    highlightTab($(this));
    return false;
});

// Show only Active Tasks in the List of Tasks
$('a[href="#/active"]').click(function(event){
    $('#todo-list li').each(function() {
      if($(this).hasClass('completed')) $(this).addClass('hidden');
      if(!$(this).hasClass('completed') && $(this).hasClass('hidden')) $(this).removeClass('hidden');
    });
    highlightTab($(this));
    return false;
});

// Show only Completed Tasks in the List of Tasks
$('a[href="#/completed"]').click(function(event){
    $('#todo-list li').each(function() {
      if($(this).hasClass('')) $(this).addClass('hidden');
      if($(this).hasClass('completed hidden')) $(this).removeClass('hidden');
    });
    highlightTab($(this));
    return false;
});

function highlightTab(element){
  $('#filters').find('li a').each(function(){
    if($(this).attr('href')==element.attr('href')){
      if(!$(this).hasClass('selected')) $(this).addClass('selected');
    } else {
      $(this).removeClass('selected');
    }
  });
}

// Double Click to bring up the edit field for a list item label
$('#todo-list').on('dblclick', '.view label', function(e) {
  $editInput = $( e.target ).closest('li').addClass('editing').find('.edit');
  $editInput.html($('.editing label').val());
  $editInput.focus();
});

//On Enter remove the edit field and replace with the edited label
$("#todo-list").on("keyup", ".edit", function (e) {
  if (e.keyCode == 13) {
    $(e.target).blur();
  }
//On Escape, ignore all edits that have occured and replace the value back to the state prior to editing
  if (e.keyCode == 27) {
    $(e.target).val($('.editing label').html()).closest('li').removeClass('editing');
  }
});

//When the item being edited loses focus remove edit field and display the edited label
$("#todo-list").on("focusout", ".edit", function(e) {
      var $toDo = $('#todo-list')
      $( '.editing label' ).html($editInput.val().trim());
      $( '.editing' ).removeClass('editing');
      if ($(this).val().trim().length == 0) {
        $( this ).closest('li').remove();
      }

//If there are no items in the list add display: none to both #main and #footer
      if ($("#todo-list").children("li").length == 0) {
        $("#main").css("display" , "none");
        $("#footer").css("display" , "none");
      }
    });
