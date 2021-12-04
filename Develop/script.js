// variables here for moment

// other variables 
var eightAm = $("#8am");
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#1pm");
var twoPm = $("#2pm");
var threePm = $("#3pm");
var fourPm = $("#4pm");
var fivePm = $("#5pm");
var sixPm = $("#6pm");


// saving text events here
function saveEvent() {

var saveEight = JSON.parse(localStorage.getItem("8:00 am"))
eightAm.val(saveEight);

}

$(document).ready(function(){
    saveEvent()

// buttons to save to local storage
$(".saveBtn").one("click", function(){
    var userInput = $(this).siblings(".form");
    console.log(userInput);
})

})