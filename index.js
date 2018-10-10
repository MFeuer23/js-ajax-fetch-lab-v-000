const token = '84403e80a5a3640e128bd9bf96d96d7470c36088';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '84403e80a5a3640e128bd9bf96d96d7470c36088';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
 
  fetch('https://api.github.com/repos/:user/js-ajax-fetch-lab/forks', {
    method: 'POST',
    body: JSON.stringify('postData'),{
    headers: {
    Authorization: `token 84403e80a5a3640e128bd9bf96d96d7470c36088`
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
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
