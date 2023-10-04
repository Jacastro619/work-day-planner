$(function () {
  var date = dayjs().format("dddd, MMMM D");
  var dateDisplay = $("#currentDay");
  var changeClass = "class";
  var pastAtt = "row time-block past";
  var presentAtt = "row time-block present";
  var futureAtt = "row time-block future";
  var time = dayjs().format("H");
  var saveButton = $(".saveBtn");
  var saveIcon = $("i");
  var saveAlert = $(".alert-success");
  var clearAlert = $(".alert-danger");
  var clearAll = $("#clear-all");
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
  dateDisplay.text(date); // displays the current day

  function showSave() {
    // shows an alert that lets the user know that the text was saved
    saveAlert.attr("style", "visibility: visible;");
  }

  function hideSave() {
    // hides the save alert
    saveAlert.attr("style", "visibility: hidden;");
  }

  function showClear() {
    // shows an alert that lets the user know that all the text was removed
    clearAlert.attr("style", "visibility: visible;");
  }

  function hideClear() {
    // hides the clear alert
    clearAlert.attr("style", "visibility: hidden;");
  }

  function loadText() {
    // Loads the content from local storage into the respective textareas
    for (i = 0; i < keyArray.length; i++) {
      var text = localStorage.getItem(keyArray[i]);
      timeIds[i].children("textarea").val(text);
    }
  }

  for (i = 0; i < timeArray.length; i++) {
    // Iterates through the timeArray and compares with the current time. Changes class to past, present, or future based on time
    if (timeArray[i] < time) {
      timeIds[i].attr(changeClass, pastAtt);
    } else if (timeArray[i] == time) {
      timeIds[i].attr(changeClass, presentAtt);
    } else {
      timeIds[i].attr(changeClass, futureAtt);
    }
  }

  saveIcon.on("click", function (event) {
    // If the user clicks on the save icon instead of the save button, the text in the textarea will be saved into local storage with a unique key name
    var saveIc = $(event.target);
    var boxText = saveIc.parent().siblings("textarea").val();
    localStorage.setItem(saveIc.parent().parent("div").attr("id"), boxText);
    showSave();
    setTimeout(hideSave, 2000);
  });

  saveButton.on("click", function (event) {
    // When the save button is clicked, the text in the textarea will be saved into local storage with a unique key name
    var saveBox = $(event.target);
    var boxText = saveBox.siblings("textarea").val();
    localStorage.setItem(saveBox.parent("div").attr("id"), boxText);
    showSave();
    setTimeout(hideSave, 2000);
  });

  clearAll.on("click", function () {
    // When the clear all button is clicked, all the text in all the text boxes will be deleted.
    for (i = 0; i < timeIds.length; i++) {
      timeIds[i].children("textarea").val("");
    }
    localStorage.clear();
    showClear();
    setTimeout(hideClear, 2000);
  });
});

//Psuedocode

// global event listener for save button
// traverse the DOM to select the time block and save to local storage
// declare current time in a variable using dayjs
// put DOM Nodes in an array to iterate over
// use loop to assign past,present,future classes based on 'if' results
// grab from local storage
// put content from local storage into the respective time block by setting the value
// set time variable for current date using dayjs
// display time in apporpiate spot on page
