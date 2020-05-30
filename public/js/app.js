// CLIENT SIDE JAVA SCRIPT FILE
console.log('Client side javascript file is loaded!')
const weatherForm=document.querySelector('form')
const search = document.querySelector('input')

const messageOne=document.querySelector('#msg1')
const messageTwo=document.querySelector('#msg2')

weatherForm.addEventListener('submit', function(e){
    e.preventDefault()

    const location =search.value
    fetch('http://localhost:3000/weather?address='+location).then(function(response){
        response.json().then(function(data){
            if(data.error){
                messageOne.textContent=data.error
               
            }else{
                messageOne.textContent= data.location
                messageTwo.textContent= data.forecast
            }
        })
    })
    
})