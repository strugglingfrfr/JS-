//task2 import function from other file. 
import {addition} from "./Task2function.mjs";
console.log("When you add the 2 numbers in the function you get",addition(76,99));
//prints os details
import os from  "os";
console.log("operating system details:",os.platform());
//Prints cpu architecture details
console.log("The CPU architecture details:",os.arch());
// prints free memory
console.log("free memory available in bytes:",os.freemem());
//prints total memory
console.log("the total memory in bytes is :", os.totalmem());
