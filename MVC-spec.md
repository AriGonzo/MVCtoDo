### All About MVC -- Model-View-Controller

#### Models: Nouns

* List of Tasks: Collection
  * Properties:
  * Methods:
    * CRUD
    * Add a Task
    * Remove a Task
    * Get a specific Task
    * Change order of Tasks?
* Task
  * Properties:
    * Text Description
    * Completion Status: done or not?
    * Parent Task?
    * Due Date?
    * Color / Category?
  * Methods:
    * Create
    * Mark Complete
    * Edit Text
    * Remove / Delete Task
    * Archive?

#### Controllers: Traffic Cop

* Workflows:
  * Edit a specific **Task**:
    * Get a specific **Task** from the **List of Tasks**
    * Edit the **Task** (and save the changes)
    * Display the view of the **List of Tasks**
  * Add a new **Task**:
    * Accept input: Text
    * Create a **Task**
    * Add new **Task** to **List of Tasks**
    * Display the view of the **List of Tasks**
  * Delete a specific **Task**
    * Get a specific **Task** from the **List of Tasks**
    * Delete the **Task**
    * Update the view of the **List of Tasks**
    * Update counter
  * Complete a specific **Task**
    * Select a specific **Task** from the **List of Tasks**
    * Update the view of specific **Task** from the **List of Tasks**
    * Update counter(s)
  * Change status of All **Tasks**
    * Update display of all **Tasks** in **List of Tasks**
    * Update the view of the **List of Tasks**
    * Update counters
  * Read All **Tasks**
    * Select nav
    * Display the view of the **List of All Tasks**
  * Filter Active **Tasks**
    * Select nav
    * Display the view of the **List of Active Tasks**
  * Filter Completed **Tasks**
    * Select nav
    * Display the view of the **List of Completed Tasks**
  * Delete Completed **Tasks**
    * Select nav
    * Display the view of the **List of Active Tasks**

#### Views: Display Items

* List of Individual Tasks
  * Filtered by:
    * All Tasks
    * Only Completed Tasks
    * Only Uncompleted Tasks
* Individual Task
  * Incomplete Task
  * Complete Task
  * Marked for Deletion? (waste bin)
  * Overdue Task? (past due date)
* UI Element Tasks
  * Add a Task
  * Edit a Task
  * Delete a Task
