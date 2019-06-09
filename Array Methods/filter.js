const songs = [
	{id:1,name:'Curl of the Burl';artist:'Mostodon'},
	{id:2,name:'Oblivion';artist:'Mostodon'},
	{id:3,name:'Flying Whales';artist:'Girjira'},
	{id:4,name:'L'Enfant Sauvage';artist:'Girjira'},
];


EX 1) Filter the even numbers

var numbers = [1,2,3,4,5,6,7,8,9,10];

var evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

// ES6
const evenNumbers = numbers.filter(num => {
  return num % 2 === 0
});

console.log(evenNumbers); // [2,4,6,8,10];






EX 2) Do a simple string search

var strings = ["hello", "Matt", "Mastodon", "Cat", "Dog"];

var filtered = strings.filter(function (str) {
  return str.includes("at");
});

// ES6
const filtered = strings.filter(str => {
  return str.includes("at");
});

console.log(filtered); // ["Matt", "Cat"];





EX 3) Filtering arrays of objects

// using the songs array from previous examples

var mastodonSongs = songs.filter(function (song) {
  return song.artist.toLowerCase() === "mastodon";
});

// ES6
const mastodonSongs = songs.filter(song => {
  return song.artist.toLowerCase() === "mastodon";
});

console.log(mastodonSongs);

// [{
//    id: 1,
//    name: "Curl of the Burl",
//    artist: "Mastodon",
//  },
//  {
//    id: 2,
//    name: "Oblivion",
//    artist: "Mastodon",
//  }]
