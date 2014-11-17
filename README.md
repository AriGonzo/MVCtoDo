MVCtoDo
=======

#Project BreakDown

1. @LoganArnett @rgcoders - [No Todos]
(https://github.com/AriGonzo/MVCtoDo/blob/development/app-spec.md#no-todos)

2. @phillycc - [New ToDo]
(https://github.com/AriGonzo/MVCtoDo/blob/development/app-spec.md#new-todo)

3. @AriGonzo - [Mark all complete and Individual complete]
(https://github.com/AriGonzo/MVCtoDo/blob/development/app-spec.md#mark-all-as-complete)

4. @LoganArnett - [Edit the To do]
(https://github.com/AriGonzo/MVCtoDo/blob/development/app-spec.md#editing)  

5. @kimkvn - [All things destroy]
(https://github.com/AriGonzo/MVCtoDo/blob/development/app-spec.md#clear-completed-button)

6. @mema82 - [Non-Tech Docs for User Experience, Non-Tech Docs for User Interaction and Counter]
(https://github.com/AriGonzo/MVCtoDo/blob/development/app-spec.md#counter)



#NON-TECHNICAL Documentation on User Experience for TODO MVC

1. User can single click in textfield area and input text.

2. User can hit enter to add the text to list.

3. User can double click on list items to edit list item.

4. User can check off list item by single clicking the "grayed out” checkmark on the left side of the list.

5. User can edit the “completed” status of a list item by a single clicking on the “light-green” check mark on the left hand side.

6. User can hover over the far end right side of list item and/or left side checkmark to get a RED “X” pop up to appear on far end right side of list item.

7. User can click on red “X” at any time to delete the list item off of that line.

8. User can click on “ALL” link (on bottom of lists) to view all list items at either the active state or completed state.

9. User can click on “Active” link to view all to do items that are not completed.

10. User can click on “Completed” to view completed list items.

11. User can click on chevron on top left to toggle all list items to its own state (completed or active).



#NON-TECHNICAL Documentation on Functionality for TODO MVC

1. Single-click in text field to input text.

2. Hit “Enter” to add to Ordered List.

3. List item then appends below the “No To-Do” list item.

4. The “No To-Do” list item now has placeholder text of “What needs to be done?”

5. The “What needs to be done?” list item now has the chevron on the left hand side of the list.

6. When list item is double-clicked for editing the chevron and the “x” disappears.

7. When the FIRST item is added to the list a smaller dropdown appends to the bottom of the list item with the following text:

    * Item left (stores the number of items still active)

	* All (anchor link)(Lists all items in list with active and  completed states)

	* Active (anchor link)(Lists only Active States)

	* Completed (anchor link)(Lists only completed items)

	* Clear completed (#) (anchor link)(stores the number of  completed list items)

8. When clicked “Clear Completed” deletes all completed items from list and is no longer visible. This button is only visible when at least One item in list is completed.
