/**
 * Callbacks
 */

// With one, it's simple enough
jQuery.get("https://httpbin.org/get?data=1", function(response) {
  // Now I have some data
});

// Callbacks get nested ad infinitum
jQuery.get("https://httpbin.org/get", function(response) {
  // Now I have some data

  jQuery.get("https://httpbin.org/get", function(response) {
    // Now I have some more data

    jQuery.get("https://httpbin.org/get", function(response) {
      // Now I have even more data!
    });
  });
});

/**
 * Promises
 */

// One Promise
axios.get("https://httpbin.org/get").then(function(response) {
  // now I have some data
});

// Multiple promises in sequence, no nesting
axios
  .get("https://httpbin.org/get")
  .then(function(response) {
    // now I have some data

    return axios.get("https://httpbin.org/get");
  })
  .then(function(response) {
    // now I have some data

    return axios.get("https://httpbin.org/get");
  });

/**
 * Async / Await
 */

// One request
async function getOneThing() {
  var response = await axios.get("https://httpbin.org/get");

  // now I have some data
}

// Multiple requests
async function getLotsOfThings() {
  var response1 = await axios.get("https://httpbin.org/get");
  var response2 = await axios.get("https://httpbin.org/get");
  var response3 = await axios.get("https://httpbin.org/get");

  // Now I have lots of data
}
