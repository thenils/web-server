const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/b912d3236048696e1423be7ecd7438de/'+ latitude +','+ longitude 

    request({url, json:true},(error, {body})=>{
        if(error){
            callback('Unable to Connect Server!', undefined)
        }else if(body.error){
            callback('Unable to find Location', undefined)
        }else{
            callback(undefined, 'It\'s currently ' +body.currently.temperature + " degrees temperature" + ' and '+body.currently.precipProbability + '% chance to rain')
        }
    })
}


module.exports = forecast
