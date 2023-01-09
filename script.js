
// Testing Day.JS ---- should console log current date -------------
console.log(dayjs().format('dddd, MMMM D YYYY'));
//------------------------------------------------------------------

var header = $('#currentDay');

var button = $(".saveBtn");


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

    console.log($(this).siblings('textarea'));

    var input = $(this).siblings('textarea').val()
    var times = $(this).parent().attr('id');

    localStorage.setItem(times, input);
  })


  for (let i = 0; i < timeBlock.length; i++) {

    var hour = `hour-${i + 9}`;

    var storage = localStorage.getItem(hour);
    console.log(storage);

    $(`#${hour}`).children('textarea').val(storage);

  };











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
      var blockHours = $(this).attr('id').split('-')[1];


      if (blockHours == timeRn) {
        $(this).addClass("present");
        $(this).children('.description').addClass('present')

      } else if (blockHours < timeRn) {
        $(this).removeClass("present");
        $(this).addClass('future');

      } else if (blockHours > timeRn) {
        $(this).removeClass('future');
        $(this).addClass('past');
      }


    });

  };



  console.log(dayjs().hour());








  // TODO: Add code to display the current date in the header of the page.
  // Displays today's date in the header---------------------------------
  function todaysDate() {
    var todaysHeaderDate = dayjs().format('dddd, MMMM D YYYY');
    header.text(todaysHeaderDate);
  }
  timeKeeper();
  todaysDate();


});
