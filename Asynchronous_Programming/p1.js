"use strict";

/* 
- synchronous programming execution where program is executed line by line, one line at a time.
- each time a function is called program execution has to wait until a function returns before continuing to the next line of the code which maybe is
another function call.

*/

let test = function() {
    console.log("Start of code");
    
    alert("Notice Async Programming!!");

    console.log("End of code");
}

let test2 = function() {
    console.log("Now I am getting attention!!");
}

test();
test2();