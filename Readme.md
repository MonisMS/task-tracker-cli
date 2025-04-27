
# Task Tracker CLI

A simple command-line interface (CLI) application for managing tasks. This tool allows you to add, update, delete, and list tasks, as well as mark tasks as completed or in progress.
[Task Tracker Project Roadmap](https://roadmap.sh/projects/task-tracker)
---

## Features

- Add new tasks with descriptions.
- Update the description of an existing task.
- Delete tasks by their ID.
- Mark tasks as **in-progress** or **completed**.
- List tasks filtered by their status (`done`, `in-progress`, or `to-do`).
- View help for available commands.

---

## Prerequisites

- **Node.js**: Ensure you have Node.js installed on your system.
- **Dependencies**: Install the required dependencies using `npm install`.

---

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory.
3. Install dependencies:
   ```bash
   npm install


   Examples
1. Add a Task
node [index.js](http://_vscodecontentref_/1) add "Buy groceries"
Output:
task add successfully <task_id>

2. Update a Task
node [index.js](http://_vscodecontentref_/2) update 1234567890 "Buy groceries and vegetables"

Output:
Task updated successfully

3. Delete a Task
node [index.js](http://_vscodecontentref_/3) delete 1234567890

Output:
Task deleted successfully

4. Mark a Task as In Progress
node [index.js](http://_vscodecontentref_/4) mark-in-progress 1234567890

Output:
Task marked as in progress

5. Mark a Task as Completed
node [index.js](http://_vscodecontentref_/5) mark-completed 1234567890

Output:
Task marked as completed

6. List All Tasks
node [index.js](http://_vscodecontentref_/6) list

Output:
Listing all tasks:
1234567890. Buy groceries [To-do]
1234567891. Complete the project report [InProgress]
1234567892. Pay electricity bill [Done]

7. List Tasks by Status
node [index.js](http://_vscodecontentref_/7) list done

Output:
Listing done tasks:
1234567892. Pay electricity bill [Done]


File Structure
index.js: Main application logic.
tasks.json: Stores the tasks in JSON format.
Dependencies
fs: For reading and writing tasks to tasks.json.
chalk: For colorful console output.
Install dependencies using:
npm install chalk

Error Handling
If an invalid command or status is provided, the application will display an error message.
If no tasks are found for a given filter, it will display:
Help Command
To view all available commands, run:
node [index.js](http://_vscodecontentref_/8) help

Output:

Available commands:
add <description>           Add a new task
update <id> <newDescription>  Update a task's description
delete <id>                 Delete a task
mark-in-progress <id>       Mark a task as in progress
mark-completed <id>         Mark a task as completed
list [done|in-progress|to-do] List tasks (all, done, in-progress, to-do)

Notes

The tasks.json file will be created automatically if it does not exist.
Task IDs are generated using Date.now() to ensure uniqueness.
License

This project is licensed under the MIT License. Feel free to use and modify it as needed. ```
