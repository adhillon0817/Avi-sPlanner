// console.log("hello from file");

// Declare Current Time (Day 3 - Week 5 class work)
var currentTime = moment();
var timeEnteries = document.querySelector
var currentHour = currentTime.hour();
var databox = document.getElementsByTagName("textarea");
$("#currentDay").text(currentTime.format('MMMM Do YYYY, h:mm:ss a'));
// Add event listeners

console.log("current:" +currentHour);

localStorage.setItem(currentTime, currentHour);

function pastPresentFuture(){
  //Iterate through databox length to evaluate dataset.hour to the currentHour and add class of past present or future.

  for (let index = 0; index < databox.length; index++) {
   var hourBack =databox[index].dataset.hour;
   
   if (currentHour < hourBack) {
    // add future class to the data box
    databox[index].classList.add("future");
   }
   else if(currentHour > hourBack){
      //add past class to data box
    databox[index].classList.add("past");
   }
   else{
    //add present class to data box
    databox[index].classList.add("present");
   }

  }
} 


pastPresentFuture();

//Local Storage
// Save an hour to local storage 
// localStorage.setItem("description", currentTime.hour();

// viewing items in local storage
// var x = localStorge.getItem("description");

// Add event listeners
