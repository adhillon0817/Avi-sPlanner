// console.log("hello from file");

// Declare Current Time (Day 3 - Week 5 class work)
var currentTime = moment();
var timeEnteries = document.querySelector
var currentHour = currentTime.hour();
$("#currentDay").text(currentTime.format('MMMM Do YYYY, h:mm:ss a'));
// Add event listeners

//Standard Business Hours
for(var i = 9; i <= 17; i++) {
//Created Block for standard Business hours
var timeBlock = `<div class="row time-block">
   <div id=hour-${i} class="col-md-1 hour">
     ${i}
     </div>    
   <textarea class="col-md-9 description">
   </textarea> 
   <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button> 
 </div>`;
 //Above second to last line is for save button
 // the following code: <textarea class="col-md-9 description"> line is for the text area.

 $("#timeEnteries").append(timeBlock)
}




//Local Storage
// Save an hour to local storage 
// localStorage.setItem("description", currentTime.hour();

// viewing items in local storage
// var x = localStorge.getItem("description");


// Add event listeners
