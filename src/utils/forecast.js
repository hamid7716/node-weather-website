const request = require('request');

const forecast = (latitude, longtitude, callback) => {
    const url = 'https://api.darksky.net/forecast/c789238b9bfbaa9d3d2153d5525f2941/' + latitude + ',' + longtitude;
    
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                temperature: response.body.currently.temperature,
                probability: response.body.currently.precipProbability,
                forecast: response.body.daily.data[0].summary
            })
        } 
    });
}

module.exports = forecast;







