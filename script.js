$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var input = $(this).siblings(".form-control").val();
    var time = $(this).parent().attr("id");
    //save into local storage
    localStorage.setItem(time, input);
  });

  //function to track the time
  function time() {
    var time1 = moment().format("H");

    //get id back so we can compare numbers
    $(".time-block").each(function () {
      var allHours = parseInt($(this).attr("data-id"));
      console.log(time1, allHours);
      //check if hour if in the past
      if (time1 < allHours) {
        $(this).addClass("past");
      }
      //check if the current hour is now and changing the colors accordingly
      else if (time1 == allHours) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  } //make a variable for current hour
  time();

  //time interval for moment to use
  var interval = setInterval(time, 15000);
  //tell time blocks what color they based on thier class
  //load all saved data from local storage

  $("#9  .form-control").val(localStorage.getItem("9"));
  $("#10  .form-control").val(localStorage.getItem("10"));
  $("#11  .form-control").val(localStorage.getItem("11"));
  $("#12  .form-control").val(localStorage.getItem("12"));
  $("#13  .form-control").val(localStorage.getItem("13"));
  $("#14  .form-control").val(localStorage.getItem("14"));
  $("#15  .form-control").val(localStorage.getItem("15"));
  $("#16  .form-control").val(localStorage.getItem("16"));
  $("#17  .form-control").val(localStorage.getItem("17"));

  //GIVEN I am using a daily planner to create a schedule
  //WHEN I open the planner
  //THEN the current day is displayed at the top of the calendar

  moment(Date);
  $("#currentDay").text(moment().format("MMMM Do YYYY"));
});
