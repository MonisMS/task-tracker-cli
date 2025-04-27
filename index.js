
import {argv} from 'node:process'
import fs from 'fs'
import chalk from 'chalk'

//print process.argv

function readTasks(){
    if(fs.existsSync('tasks.json')){
        const data=fs.readFileSync('tasks.json','utf-8')
        return JSON.parse(data)
    }
    return []
}

function writeTasks(tasks){
    fs.writeFileSync('tasks.json',JSON.stringify(tasks,null,2))
}


function addTask(){
    const tasks=readTasks()

        const taskObject={
            id:Date.now(),
            description:process.argv[3],
            completed:false,
            inProgress:false,
            createdAt:new Date().toISOString(),
            updatedAt:new Date().toISOString(),
        }
        
        tasks.push(taskObject)            //push the read contents in the object
        writeTasks(tasks)
        console.log(chalk.green(`task add succesfully ${taskObject.id}`));
        
        }
    
function updateTasks(){
    const id=Number(process.argv[3])
    const tasks =readTasks()
    const newDescription=process.argv[4]
    const taskId=tasks.find((task)=> task.id=== id)

    if(taskId){
        taskId.description=newDescription;
        taskId.updatedAt=new Date().toISOString();
        
        writeTasks(tasks)
        console.log(chalk.yellow('Task updated successfully'));
        
    }
    else{
        console.log(chalk.red('Task not found'));
        
    }
}
        
function deleteTask(){
    const tasks=readTasks()
   const id=Number(process.argv[3]);
   const newTask=tasks.filter((task)=>task.id!== parseInt(id))
   if (newTask.length < tasks.length) {
    writeTasks(newTask);
    console.log(chalk.blue('Task deleted successfully'));
}
else 

{
    console.log(chalk.red('Task not found'));
    
}
}

function markInProgress(){
    const tasks=readTasks()
    const id=process.argv[3]
    const task=tasks.find((task)=> task.id === parseInt(id))

    if(task){
        task.inProgress=true;
        task.completed=false;
        task.updatedAt = new Date().toISOString();

        writeTasks(tasks);
        console.log(chalk.magenta('Task marked as in progress'));
        
    }
}


function markCompleted(){
    const tasks=readTasks()
    const id=process.argv[3]
    const task=tasks.find((task)=> task.id === parseInt(id))

    if(task){
        task.inProgress=false;
        task.completed=true;
        task.updatedAt = new Date().toISOString();

        writeTasks(tasks);
        console.log(chalk.green('Task marked as completed'));
        
    }
}

function listTasks(){
    const tasks=readTasks()
    let filteredTasks=tasks;
    const status=process.argv[3];
    if(status){
        if(status.toLowerCase() === "done"){
            filteredTasks=tasks.filter((task)=>task.completed )
        }
        else if(status.toLowerCase()=== "in-progress"){
            filteredTasks=tasks.filter((task)=> task.inProgress)
        }
        else if(status.toLowerCase()== "to-do"){
            filteredTasks=tasks.filter((task)=> !task.inProgress && !task.completed)
        }
        else{
            console.log("Invalid status use done,in-progress or to-do to get the result");
            return;
        }
    }
    if(filteredTasks.length === 0){
        console.log(chalk.red('No tasks found'));
    }
    else {
        console.log(chalk.blue(`Listing ${status ? status : "all"} tasks:`));
        filteredTasks.forEach((task) => {
            console.log(
                `${chalk.cyan(task.id)}. ${chalk.white(task.description)} [${
                    task.completed
                        ? chalk.green('Done')
                        : task.inProgress
                        ? chalk.yellow('InProgress')
                        : chalk.red('To-do')
                }]  - Created at: ${chalk.gray(new Date(task.createdAt).toLocaleString())}`
            );
        });
        
    }
}

function showHelp(){
    console.log(`
        Available commands:
        add <description>           Add a new task
       update <id> <newDescription>  Update a task's description
        delete <id>                 Delete a task
        mark-in-progress <id>       Mark a task as in progress
        mark-completed <id>         Mark a task as completed
        list [done|in-progress|to-do] List tasks (all, done, in-progress, to-do)
        `);
    
}


//cli logic
if(process.argv[2]==="add"){
   addTask() 
}
if(process.argv[2]==="update"){
    updateTasks() 
 }

 if(process.argv[2]==="delete"){
    deleteTask() 
 }
 if(process.argv[2]==="mark-in-progress"){
    markInProgress() 
 }
 if(process.argv[2]==="mark-completed"){
    markCompleted() 
 }

 if(process.argv[2]==="list"){
    listTasks()
 }
 if (!process.argv[2] || process.argv[2] === "help") {
    showHelp();
}

//console.log(action);
//console.log(task);

