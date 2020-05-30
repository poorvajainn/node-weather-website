//Making HTTP Requests
const request=require('request')
const geocode=require('./geocode.js')

const Place=process.argv[2]


geocode.geocode(Place, function(error,data){
  if(error){
    return console.log(error)  
  }

  geocode.forecast( data.lati,data.long , function(error,forecastData){  
    if(error){
      return  console.log(error)
    }

    console.log(data.location)   
    console.log('Its', forecastData)
  } )
})


// //ASYNCHRONOUS BASICS
// console.log('starting')

// setTimeout(function(){
//     console.log('2 second Timer')
// },2000)

// setTimeout(function(){
//     console.log('0 second Timer')
// },0)

// console.log('stopping')
//call stack tracks the execution of all the functions in our program
//call stack tp node APIS to callback queue then even loop
//set time is not in js hence node runs it, 
//a new event is registred in node api js is single threaded 
//whereas node js is not single threaded non blocking nature of node js
//then from node api when event is done it goes to callback queue
//, event loop waits for call stack to be empty then callback queue item are processe
//no events registered call stack empty and callback queue empty
// so we know now that main needs to finish first