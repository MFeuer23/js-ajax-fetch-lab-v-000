

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return 'c6287c898b8378e14fb4fac1b17bce1ca5e771fa';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
 
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    body: JSON.stringify('postData'),
    headers: {
    Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => console.log(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value
  
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    body: JSON.stringify('postData'),
    headers: {
    Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => console.log(json));
}

}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
