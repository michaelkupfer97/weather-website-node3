const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.tomtom.com/search/2/geocode/${encodeURIComponent(address)}.json?key=${process.env.TOMTOM_KEY}&limit=1`;

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined);
        } else if (body.httpStatusCode === 400 || body.results.length === 0) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            const latitude = body.results[0].position.lat;
            const longitude = body.results[0].position.lon;
            const location = body.results[0].address.freeformAddress;
            callback(undefined, {
                latitude: latitude,
                longitude: longitude,
                location: location
            });
        }
    }
    );
}

module.exports = geocode;

// geocode('new york', ( error, data) => {
//     console.log('Error : ', error);
//     console.log('Data : ', data);
// });