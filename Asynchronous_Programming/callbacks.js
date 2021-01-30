/*
callbacks are central to asynchronous coding in javascript. A callback is simply a function that is invoked or called after something else happens.
*/


let logCall = function() {
    console.log("logCall was called back");
};
setTimeout(logCall, 1000) 

/* In JS, you can define a function at the time you pass it to the function. This is called an anonymous function. So the above code can be replicated as:

setTimeout(function() {
    console.log("logCall was called back")
}, 3000)

*/