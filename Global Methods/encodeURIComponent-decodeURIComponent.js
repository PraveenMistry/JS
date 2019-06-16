var uri = "https://abc.com/my test.asp?name=stale&car=saab";

var uri_enc = encodeURIComponent(uri);
console.log("encodeURIComponent",uri_enc); // https%3A%2F%2Fabc.com%2Fmy%20test.asp%3Fname%3Dstale%26car%3Dsaab

var uri_dec = decodeURIComponent(uri_enc);
console.log("decodeURIComponent",uri_dec); // https://abc.com/my test.asp?name=stale&car=saab