link:[https://roadmap.sh/projects/task-tracker]
# Task Tracker CLI

A command-line task management application that helps you organize and track your tasks efficiently.

## Features

- Create, view, update, and delete tasks
- Mark tasks as complete or incomplete
- Filter tasks by status or priority
- View task statistics and summaries
- Export tasks to different formats

## Installation

```bash
npm install -g task-tracker-cli
```

## Usage

```bash
# Create a new task
task add "Complete project documentation" --priority high --due "2023-12-15"

# List all tasks
task list

# List only incomplete high-priority tasks
task list --status incomplete --priority high

# Mark a task as complete
task complete 3

# Remove a task
task delete 2

# Show task statistics
task stats
```

## Configuration

Configure task-tracker by creating a `.taskrc` file in your home directory:

```
defaultPriority=medium
defaultView=incomplete
dateFormat=YYYY-MM-DD
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.