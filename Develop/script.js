
// Testing Day.JS ---- should console log current date -------------
console.log(dayjs().format('dddd, MMMM D YYYY'));
//------------------------------------------------------------------

var header = $('#currentDay');

var button = $("#saveBtn");
var textInput = $(".description");

var timeBlock = $(".time-block");

var past = $('.past');
var present = $('.present');
var future = $('.future');

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  button.on('click', function () {
    var input = $(this).siblings(textInput).val()
    var times = $(this).parent().attr('id');

    localStorage.setItem(times, input);
  })




  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  function timeKeeper() {
    //gets current hour in 24 hour time
    var timeRn = dayjs().hour();

    //function to loop over hour blocks and add past, present, or future class depending on time of day
    timeBlock.each(function () {
      var blockHours = parseInt($(this).attr("id").split("hour")[1]);

      if (timeRn === blockHours) {
        $(this).removeClass(future)
        $(this).removeClass(past)
        $(this).addClass(present)
      }

    })

  }






  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //





  // TODO: Add code to display the current date in the header of the page.
  // Displays today's date in the header---------------------------------
  function todaysDate() {
    var todaysHeaderDate = dayjs().format('dddd, MMMM D YYYY');
    header.text(todaysHeaderDate);
  }

  todaysDate();
});
