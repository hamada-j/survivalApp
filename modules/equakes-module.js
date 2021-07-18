/*
const got = require('got');

(async () => {
	try {
		const response = await got('https://sindresorhus.com');
		console.log(response.body);
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();

const timesChoice = ["month", "day", "week", "hour"]
const magsChoice = ["all", "4.5", "2.5", "1.0", "significant"]

// month day week hour
// all, 4.5, 2.5, 1.0 significant

function getEquakes( mag = "significant", time= "month"){
    if (!magsChoice.includes(mag) || !timesChoice.includes(time)){
        return "Bad chose Bro!"
    }

    const url = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${mag}_${time}.geojson`;

    got(url).then(res => console.log(JSON.parse(res.body).features)).catch(err => err.response.body)

    return url;
}

//getEquakes("all", "month")
//console.log(getEquakes("all", "month"));
*/

/*
FOR TEST

function getQuakes (mag='significant', time="hour")  {
    return new Promise((resolve,reject) => {
        
        if(!magsChoices.includes(mag) || !timesChoices.includes(time)){
            reject("bad choice my friend!");
        }
        
        got(`https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${mag}_${time}.geojson`)
            .then(res => resolve(JSON.parse(res.body).features))
            .catch(error => reject(error.response.body));
    });
};

getQuakes("all", "month").then(res => console.log(res))
*/


const got = require('got');

const timesChoices = ["hour", "day", "week", "month"];
const magsChoices = ['all', '1.0', '2.5', '4.5', 'significant'];

exports.getEarthquakes = (mag='significant', time="hour") => {
    return new Promise((resolve,reject) => {
        
        if(!magsChoices.includes(mag) || !timesChoices.includes(time)){
            reject("bad choice my friend!");
        }
        
        got(`https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${mag}_${time}.geojson`)
            .then(res => resolve(JSON.parse(res.body).features))
            .catch(error => reject(error.response.body));
    });
};
