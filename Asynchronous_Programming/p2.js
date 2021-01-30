"use strict";

let test = function() {
    setTimeout(function() {
        console.log("start of code");
        alert("Notice me!")
        console.log("End of code");
    }, 50)
};

let test2 = function() {
    console.log("I am getting attention");
}

test();
test2();