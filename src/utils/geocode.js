const request=require('request')


const forecast= function(lat,long,callback){
    const url='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'9&appid=bdd84dc16c2c0153f3526e0945055f6c&units=metric'

    request({ url:url , json: true},function(error, response){
    if(response.body.cod==="400"||error){
        callback('cant connect',undefined)

    }else{
        callback(undefined,"Its "+response.body.main.temp+" degrees outside. There is a chance of "+ response.body.weather[0].description)
    }
    })
}
const geocode= function(address,callback){
    const geoURL='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoicG9vcnZhamFpbiIsImEiOiJja2FwaTUyc3kwYThzMnBtc2kxNDQyaXhwIn0.5SmvDY7Uf7gZv9JXj7pk2g'
  
    request({ url:geoURL , json: true},function(error, response){
      if(response.body.message==="Not Found"||response.body.features.length===0||error){
        callback('cant connect or location er',undefined)
      }else{
        callback(undefined, {
         lati: response.body.features[0].center[1],
         long: response.body.features[0].center[0],
         location:response.body.features[0].place_name
        })
      } 
    })
}
  module.exports={
      geocode:geocode,
      forecast:forecast
  }