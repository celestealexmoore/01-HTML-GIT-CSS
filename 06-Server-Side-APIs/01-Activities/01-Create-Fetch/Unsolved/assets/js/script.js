var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');

// `getApi` function is called when the `fetchButton` is clicked

function getApi() {
  // TODO: Insert the API url to get a list of your repos
  var requestUrl = 'www.api.github.com/users/repos/celestealexmoore?___insert_max_here/';

  fetch(requestUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Looping over the fetch response and inserting the URL of your repos into a list
      for (var i = 0; i < data.length; i++) {
        // Create a list element
        var listItem = document.createElement('li');

        // Set the text of the list element to the JSON response's .html_url property
        listItem.textContent = data[i].html_url;

        // Append the li element to the id associated with the ul element.
        repoList.appendChild(listItem);
      }
    });
}

fetchButton.addEventListener('click', getApi);



/* 
 the  url value of requestUrl 
 *** can't remember what URL stands for, but bridge what it is + how we are using it.
 also don't forget to differenciate endpoints vs. url parameters.
*/


/* function fetch(response) {
  .then{

  }.then {
    .then is a method that allows chaining commands together.
    its built-in functionality works in a way that the parameters 
    --> requestUrl (line 10)
    --> response (line 11)
    --> data
    are all essentially the same thing.

    
  }
} */

// fetch(requestUrl)


// my question is: can .then take in other parameters, or is this the only way it works?