## Review

Today we talked about [User Stories](http://en.wikipedia.org/wiki/User_story) and the [Model-View-Controller](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) pattern. In your teams, agree on a shared repository that everyone forks and clones, setup everyone's local clones with [git-flow](http://nvie.com/posts/a-successful-git-branching-model/), and start writing your project plan for the TodoMVC application, starting with the examples below.

As a group, you should have a complete set of User Stories that describe the functionality; a breakdown of Models, Views, and Controllers; and a set of estimates and assignments. Tomorrow we'll discuss how you can organize your code files and use the features of jQuery to implement your features. Remember to pair up on tasks, pair promiscuously, and deploy often to the Github Pages (`gh-pages`) branch.

### All About User Stories

#### EPIC: I can create _a **List of Tasks**_ so that...

* I can keep track of what I need to do next.
* I can track what I have already done.
* I can track important due dates.
* I can stay out of trouble.
* I can manage my time better.


----

#### I can _add a **Task** to the **List of Tasks**_ so that I can _be reminded to do it_.
* Click inside the "What needs to be done?" box.
* Type my new todo message.
* Hit <Enter> to add my new task.
* How do I get back to that task? By clicking inside the box.
* Can I change what I just wrote? How do I do that?
* When does the check mark do?
* An X appears when I hover on the right hand side of the box.
* What does the X do?

----

#### I can _mark an incomplete **Task** as completed_ so that I can _track what has been done_

* I click on the check button to mark the task as complete; It creates a strikethrough effect on the text. But the text remains visible. This allows me to see what has been done.
* Hitting the check mark the first time increases the "Clear Completed" counter and decreases the "item left" counter.
* Should there be a message (below the footer) explaining to me that hitting the check mark marks it complete?
* Hitting the check mark a second time, returns the task to incomplete. That decreases the "Clear Completed" counter and increases the "item left" counter.
* Can I keep an archive of completed tasks?

----

#### I can _view a **List of Tasks** that are incomplete_ so that I can _pick what I need to do next_.
*

----

#### I can _remove **Tasks** from the **List of Tasks**_ so that I can _keep my list clean_.

* Click inside the item box that I want to mark as completed.
* Click the X button on each item to remove it; confirm first?
* Can I immediately undo the remove if I did it by mistake?
* Can I get it back after I remove it? Trash can vs black hole of death?
* Can I remove more than one item at a time? All completed items?
* Can I temporarily remove an item and have it return to my list at a future date?
* Can I keep an archive of removed tasks?

----

#### I can _change a **Task** on the **List of Tasks**_ so that I can _fix my typos and be more specific about them_.
* I click on the box and type my changes
* Hit <Enter> to update.
* Is there a message length limit?
* Can I re-order the the items by clicking and dragging?
* Can I change the font color, style or size for emphasis?

---

#### I can _view a **Task** on the **List of **Tasks** so that I can _see what has been completed_.
* Can I view these tasks on my phone as well as desktop?
* How are the desktop and mobile viewing experiences different?
* How many tasks can I see at once?

### I can click on “ALL” link (on bottom of lists) so that I can mark all items Completed or incomplete.
* Click on the "All" link. Then click on the Chevron button. The lists toggles between complete (with green check marks on each time and strike through text; the "Clear Completed" box number total equals the total number of items) and incomplete (the checkmarks go from green color to dim gray; text no longer has strikethrough. The "Clear Completed" box disappears.)

---

 ### I can click on the "Active" text so that I can see which items still need to be done.
*
---

### I can click on the "Completed" text so that I can see which items have been completed but not deleted.
*

---

### I can click on the "Clear Completed" text so that I can see simplify my list to show the items that still need to be done.

---
