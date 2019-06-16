var uri = "my test.asp?name=stale&car=saab";

var enc = encodeURI(uri);
console.log("encodeURI",enc);  // my%20test.asp?name=stale&car=saab

var dec = decodeURI(enc);
console.log("decodeURI",dec);  // my test.asp?name=stale&car=saab
