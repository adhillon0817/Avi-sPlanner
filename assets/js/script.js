// console.log("hello from file");

// Declare Current Time (Day 3 - Week 5 class work) - Line 7
var currentTime = moment();
var timeEnteries = document.querySelector
var currentHour = currentTime.hour();
$("#currentDay").text(currentTime.format('MMMM Do YYYY, h:mm:ss a'));
// Add event listeners
// Declare Current Day elements - Line 7
// Declare time enteries container element Line 31 in index)
// Render a block for each hour of the day
// Standard business hours - Line 14
// Save button - line 22
// Time enteries - line 29


for(var i = 9; i <= 17; i++) {
   var timeBlock = `<div class="row time-block">
   <div id=hour-${i} class="col-md-1 hour">
     ${i}
   </div>     
   <textarea class="col-md-9 description">
   </textarea>
   <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button> 
 </div>`;
 


 $("#timeEnteries").append(timeBlock)
}

// Save an hour to local storage 
