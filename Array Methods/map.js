const songs = [
	{id:1,name:'Curl of the Burl';artist:'Mostodon'},
	{id:2,name:'Oblivion';artist:'Mostodon'},
	{id:3,name:'Flying Whales';artist:'Girjira'},
	{id:4,name:'L'Enfant Sauvage';artist:'Girjira'},
];




// EX 1) Simple transformation of array of objects into array of strings

var allSongNames = songs.map(function (song) {
  return song.name;  
});

// ES6
const allSongNames = songs.map(song => {
  return song.name;
});

console.log(allSongNames); // ["Curl of the Burl","Oblivion","Flying Whales","L'Enfant Sauvage"];





// EX 2) Applying a transformation through an util function

const lowerCaseSongs = songs.map(mySongFunc);

var mySongFunc = function(song) {
  return song.name.toLowerCase();
};

// ES6
const mySongFunc = song => {
  return song.name.toLowerCase();
};

console.log(lowerCaseSongs); // ["curl of the burl","oblivion","flying whales","l'enfant sauvage"];




// EX 3) Transforming the given array and adding and removing properties from each object

var mapped = songs.map(function (song) {
  // using _.omit we remove the artist property
  // don't use delete because it mutates the song object
  // while _.omit creates a new one
  var newSong = _.omit(song, "artist");
  
  return Object.assign(newSong, {
    scrobbleCount: 0,
    spotifyUrl: "let's just imagine these properties make sense for now",
  });
});

// ES6
const mapped = songs.map(song => {
  // let's remove the artist property
  const { artist, ...rest } = song;
  
  return {
     ...rest,
    scrobbleCount: 0,
    spotifyUrl: "let's just imagine these properties make sense for now",
  };
});

console.log(mapped);