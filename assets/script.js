// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var date = dayjs().format("dddd, MMMM D");
var dateDisplay = $("#currentDay");
var changeClass = "class";
var pastAtt = "row time-block past";
var presentAtt = "row time-block present";
var futureAtt = "row time-block future";
var time = dayjs().format("H");
var saveButton = $(".saveBtn");
var saveAlert = $(".alert-success");
var saveIcon = $("i");
var timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var timeIds = [
  $("#hour-9"),
  $("#hour-10"),
  $("#hour-11"),
  $("#hour-12"),
  $("#hour-13"),
  $("#hour-14"),
  $("#hour-15"),
  $("#hour-16"),
  $("#hour-17"),
];
var keyArray = [
  "hour-9",
  "hour-10",
  "hour-11",
  "hour-12",
  "hour-13",
  "hour-14",
  "hour-15",
  "hour-16",
  "hour-17",
];
loadText();
dateDisplay.text(date);

function showSave() {
  saveAlert.attr("style", "visibility: visible;");
}

function hideSave() {
  saveAlert.attr("style", "visibility: hidden;");
}

function loadText() {
  for (i = 0; i < keyArray.length; i++) {
    var text = localStorage.getItem(keyArray[i]);
    timeIds[i].children("textarea").val(text);
  }
}

for (i = 0; i < timeArray.length; i++) {
  if (timeArray[i] < time) {
    timeIds[i].attr(changeClass, pastAtt);
  } else if (timeArray[i] == time) {
    timeIds[i].attr(changeClass, presentAtt);
  } else {
    timeIds[i].attr(changeClass, futureAtt);
  }
}

saveIcon.on("click", function (event) {
  var saveIc = $(event.target);
  var boxText = saveIc.parent().siblings("textarea").val();
  localStorage.setItem(saveIc.parent().parent("div").attr("id"), boxText);
  showSave();
  setTimeout(hideSave, 2000);
});

saveButton.on("click", function (event) {
  var saveBox = $(event.target);
  var boxText = saveBox.siblings("textarea").val();
  localStorage.setItem(saveBox.parent("div").attr("id"), boxText);
  showSave();
  setTimeout(hideSave, 2000);
});

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

// global event listener for save button
// traverse the DOM to select the time block and save to local storage
// declare current time in a variable using dayjs
// put DOM Nodes in an array to iterate over
// use loop to assign past,present,future classes based on 'if' results
// grab from local storage
// put content from local storage into the respective time block by setting the value
// set time variable for current date using dayjs
// display time in apporpiate spot on page
