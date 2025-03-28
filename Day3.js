/*
// Task 3 
//non blocking file read

const fs = require ("fs");
console.log ("Start proccess");

fs.readFile("file.txt","utf8",(err, data)=>{
    if (err) throw err;
    console.log(data);
});
console.log("end process");
/* non blocking file read is asynchronised function so it doesnt wait for any processto finish before it can start and output
 the next one . Hence  node ,js outputs start procces and end process before it reads the file. Because it non blocking 
 event loop processes it  in the bckground and moves to the nexg process and it then outputs it when it is doen using callback




// blocking file read
const fs= (require("fs"));
console.log("Start reading the file")

const fileData = fs.readFileSync("file.txt", "utf-8");
console.log(fileData);

console.log("The file data has been outputted"); 

/* Blocking file read is a synchronised function so it take every procces one by one . It doesmnt move to the next procces
until the one bofore has finished. Hence it reads the file beofre moving to  console.log. As it is a blocking opertaion the event loop
sends the process to thread pool and it waits for the worker (ie: the threads) to finish reading the file before it moves on to the next one
*/

/*
//task 1 event loop program
console.log("Event loop program")

setImmediate (()=>{
    console.log("Set interval works before set timeout as it start after the event loop cyccle has finished")
})

setTimeout(()=>{
    console.log("Set timeout runs at the end because it waits for the next event loop cycle to start. Even if the time is set to 0")
},0)

process.nextTick(()=>{
    console.log("Runs  immediately after syncronous code as it doesnt wait for the event loop cycle to move forward")
})

console.log("End, Your seeing this before all the functions because its syncronous code")

*/
/*
//task 2
/* non blocking opertations are offloaded to the event loop . so for this task we can use any 
nonblocking function. eg setTimeout, fs.readfile.

//ill use a function which squares every value of the array
console.log("Task 2")
 function longOperation(){
    let nums=[224,234,251,261,143,222,247,251]
        setTimeout(()=>{
            nums.forEach((num)=>{
                console.log(num*num);
            });
        },3000);
        setTimeout(()=>{
            console.log("Event loop pushes the function into stack and then it runs")
        },3000);
 }
 longOperation();
 
console.log("The function is offloaded to the event loop")


// the function long operation in offloaded to the event loop as it requires 3 second and it is a nonblocking function.


//task 4 
//implememnt an event emmitter (custom and callback)
const EventEmitter = require ("events");
const myEmitter = new EventEmitter ();

myEmitter.on ("matchTime",(team)=>{
    console.log(`Today ${team} play a match at 2 pm PST `)
})

myEmitter.emit("matchTime", "Pakistan");

// i added a cuistom event and when it is emitted the callback function executes
*/

//task5
//create a simple express server , explain how event loop handles multiple client requests at once

const express = require ("express");
const app = express();

app.get("/", (req,res)=>{
    res.send("All the tasks for the have been completed");
});

app.listen(3000,()=>{
    console.log("server running on http://localhost:3000");
});

/* event loop handles multiple client side requests efficiently without blocking 
the server.it keeps running the server and waits for requests and when client makes the 
request it is registered in event loop and the callback ie: the res req function is added to the event loop.
event loop sees that task is ready to process and it procceses it and moves to the next request. as the process is run the even 
event loop continous waiting for more requests.*/

