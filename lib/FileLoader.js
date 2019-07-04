/* eslint-env browser */

// Loads raw file content with Fetch API

class Loader {
  load(url) {
    return new Promise(function(resolve, reject) {
      fetch(url).then(function(response) {
        return response.text();
      }).then(function(result) {
        resolve(result);
      });
    });
  }
}

export default new Loader();