const songs = [
	{id:1,name:'Curl of the Burl';artist:'Mostodon'},
	{id:2,name:'Oblivion';artist:'Mostodon'},
	{id:3,name:'Flying Whales';artist:'Girjira'},
	{id:4,name:'L'Enfant Sauvage';artist:'Girjira'},
];




EX 1) Calculate the sum of an array of integers

const numbers = [2,10,11,5,16];

var sum = numbers.reduce(function (acc, currValue) {
  return acc + currValue;
}, 0);

// ES6
const sum = numbers.reduce((acc, currValue) => {
  return acc + currValue;
}, 0);

console.log(sum); // 44





EX 2) Build an object from an array — { artist: song count}


var obj = songs.reduce(function (acc, currValue) {
  var artist = currValue.artist;
  var artistCount = acc[artist] ? acc[artist] + 1 : 1;
  
  var newObj = {};
  newObj[artist] = artistCount;
  
  return Object.assign(acc, newObj);
}, {});

// ES6
const obj = songs.reduce((acc, currvalue) => {
  const artist = currValue.artist;
  const artistCount = acc[artist] ? acc[artist] + 1 : 1;
  
  return {
    ...acc,
    [artist]: artistCount,
  };
}, {});

console.log(obj); // {Mastodon: 2, Gojira: 2}







EX 3) Turn an array of arrays into a single one

const mult = [songs, [{id: 112, name: "Chop Suey", artist: "System of a Down" }]];

var flatMult = mult.reduce(function (acc, currValue) {
  return acc.concat(currValue);
}, []);

// ES6
const flatMult = mult.reduce((acc, currValue) => {
  return acc.concat(currValue);
}, []);

console.log(flatMult); 

// [
//  { id: 1, name: "Curl of the Burl", artist: "Mastodon" },
//  { id: 2, name: "Oblivion", artist: "Mastodon" },
//  { id: 3, name: "Flying Whales", artist: "Gojira" },
//  { id: 4, name: "L'Enfant Sauvage", artist: "Gojira" },
//  { id: 112, name: "Chop Suey", artist: "System of a Down" },
// ]



