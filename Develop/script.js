// variables here for moment
var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');

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

// current date and time here
var timeInterval = setInterval(function(){
var timeNow = moment();
$('#currentDay').html(timeNow.format('MMMM Do YYYY, h:mm:ss a'));
}, 100);

// saving text events here
function saveEvent() {

var saveEight = JSON.parse(localStorage.getItem("8:00 am"))
eightAm.val(saveEight);

}

$(document).ready(function(){
    saveEvent()

// buttons to save to local storage
$(".saveBtn").one("click", function(){
    var userInput = $(this).siblings(".form").val().trim();
    // console.log(userInput);
    var hourNow = $(this).siblings(".description").text().trim();
    // console.log(hourNow);
    localStorage.setItem(hourNow, JSON.stringify(userInput));
})

})