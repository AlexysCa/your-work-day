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

var hour = moment().hours();

// current date and time here
var timeInterval = setInterval(function(){
var timeNow = moment();
$('#currentDay').html(timeNow.format('MMMM Do YYYY, h:mm:ss a'));
}, 100);

// saving text events here
function saveEvent() {

var saveEight = JSON.parse(localStorage.getItem("8:00 am"))
eightAm.val(saveEight);

var saveNine = JSON.parse(localStorage.getItem("9:00 am"))
nineAm.val(saveNine);

var saveTen = JSON.parse(localStorage.getItem("10:00 am"))
tenAm.val(saveTen);

var saveEleven = JSON.parse(localStorage.getItem("11:00 am"))
elevenAm.val(saveEleven);

var saveTwelve = JSON.parse(localStorage.getItem("12:00 pm"))
twelvePm.val(saveTwelve);

var saveOne = JSON.parse(localStorage.getItem("1:00 pm"))
onePm.val(saveOne);

var saveTwo = JSON.parse(localStorage.getItem("2:00 pm"))
twoPm.val(saveTwo);

var saveThree = JSON.parse(localStorage.getItem("3:00 pm"))
threePm.val(saveThree);

var saveFour = JSON.parse(localStorage.getItem("4:00 pm"))
fourPm.val(saveFour);

var saveFive = JSON.parse(localStorage.getItem("5:00 pm"))
fivePm.val(saveFive);

var saveSix = JSON.parse(localStorage.getItem("6:00 pm"))
sixPm.val(saveSix);
}

console.log(moment().hour());

// bkg colors to show which times have pasted, current, and upcoming
function timeBackground () {

$(".form").each(function(){
    var timeColor = parseInt($(this).attr("id"));
    hour = parseInt(hour);
    console.log(timeColor);
    console.log(hour);
        if (hour > timeColor) {
            $(this).addClass("past");
        } else if (hour < timeColor) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
});
}


$(document).ready(function(){
    saveEvent()
    timeBackground()

// buttons to save to local storage
$(".saveBtn").one("click", function(){
    var userInput = $(this).siblings(".form").val().trim();
    // console.log(userInput);
    var hourNow = $(this).siblings(".description").text().trim();
    // console.log(hourNow);
    localStorage.setItem(hourNow, JSON.stringify(userInput));
})
}) 
