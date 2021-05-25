
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

    got(url).then(res => console.log(JSON.parse(res.body).features)).catch(err => console.log(err))

    return url;
}

//getEquakes("all", "month")
//console.log(getEquakes("all", "month"));







