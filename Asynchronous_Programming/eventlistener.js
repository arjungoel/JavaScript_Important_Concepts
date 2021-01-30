// the most common example of callbacks are Event Listeners.

let btn = document.querySelector("#item1");

btn.addEventListener("click", function(e) {
    console.log("The button is clicked")
})