
import {argv} from 'node:process'
import fs from 'fs'
//print process.argv

const action = process.argv[2]
const task=process.argv[3]
if(action=="add"){

const taskObject={
    id:Date.now(),
    description:process.argv[3],
    status:"todo",
}

//adding the task
if(fs.existsSync('tasks.json')){       //check if file exists
   const readTasks= fs.readFileSync('tasks.json','utf-8')    //get tasks from the file
const tasks=JSON.parse(readTasks)
tasks.push(taskObject)            //push the read contents in the object
fs.writeFileSync('tasks.json',JSON.stringify(tasks,null,2))     // Save the updated tasks array back to the file
console.log(`task add succesfully ${taskObject.id}`);
console.log(taskObject);
}
else
{
   const tasks=[]    // If the file doesn't exist, initialize an empty tasks array
   tasks.push(taskObject)
   // Create the file and save the task array as JSON
   fs.writeFileSync('tasks.json',JSON.stringify(tasks,null,2))
   console.log(`task add succesfully ${taskObject.id}`);
console.log(taskObject);
}
}

//updating the task
if(action=="update"){
const taskId= Number(process.argv[3]);
const newDescription=process.argv[4]

if(fs.existsSync('tasks.json')){
const data=fs.readFileSync('tasks.json','utf-8')
const tasks=JSON.parse(data)
let taskfound=false;
const task = tasks.find(task => task.id === taskId);
if (task) {
    task.description = newDescription;
    fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));
    console.log("Task updated successfully.");
} else {
    console.log("Task not found.");
}



}else{
    console.log("no tasks available");
    
}
}





//console.log(action);
//console.log(task);

