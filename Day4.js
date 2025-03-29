/*// task 1
//write a script that prints current file name and directory
//prints vfilename with whole path inc directory.
console.log(__filename);
//prints only the file name as it uses path function which here specifies that only name ie basename is to be printed
const path = require("path");
console.log(path.basename(__filename));
//prints directory name inc file name
console.log(__filename);
//prints only directory name as it is specified in console.log usi path.dirname. 
const path2 = require("path");
console.log(path.dirname(__filename));
*/
//task 3 import os module and print details.
const os = require ("os");
console.log("operating system details:",os.platform());