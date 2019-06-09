Now we must get a string separated by commas with all the songs that have a duration superior to 3 minutes.



const spotifySongs = [
	{id:1,name:'Curl of the Burl';artist:'Mostodon',duration:204},
	{id:2,name:'Oblivion';artist:'Mostodon',duration:306},
	{id:3,name:'Flying Whales';artist:'Girjira',duration:444},
	{id:4,name:'L'Enfant Sauvage';artist:'Girjira',duration:246},
];



const lastFmSongs = [
	{id:5,name:'';artist:'Mostodon',duration:192},
	{id:6,name:'';artist:'Mostodon',duration:186},
	{id:7,name:'';artist:'Girjira',duration:132},
	{id:8,name:'';artist:'Girjira',duration:240},
];


const allSongs = [spotifySongs,lastFmSongs];


// Let's reduce the array of arrays into a single one
const songNames = allSongs.reduce((acc, currValue) => {
  return acc.concat(currValue);
}, [])


// Let's map it out with the seconds turned into minutes 
.map(song => {
  return { ...song, duration: Math.floor(song.duration / 60) };
})


// Let's filter the ones under 3 minutes
.filter(song => {
  return song.duration > 3;
})
// Now let's map out the song names the quick way
.map(song => song.name).join(" , ");

console.log(songNames); // Oblivion , Flying Whales , L'Enfant Sauvage , Out of the Black





-------------------------------------------------------------------------------------------------


// 1 ) Map return array object

cities.map((city)=>{
	return {
		[city.name]:city.visited
	}
})

// OUTPUT: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

// 2 ) Reduce return single object without accumulator

cities.reduce((acc,city)=>{
	return {
		[city.name]:city.visited
	}
},{});

// OUTPUT: {New York: "yes"}

3 ) Reduce return object with
cities.reduce((acc,city)=>{
	return {
		...acc,
		[city.name]:city.visited
	}
});

// OUTPUT: {name: "Paris", visited: "no", Lyon: "no", Marseille: "yes", Rome: "yes", …}
