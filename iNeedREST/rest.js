var fetcher = fetch("http://jsonplaceholder.typicode.com/")
const result = document.getElementById("result")

//fetching function 
function fetched(input)
{
   const para = document.createElement('p')
   para.innerText = JSON.stringify(input)
   result.appendChild(para)
}

//hide funciton 
function hideStuff()
{
    result.innerHTML = ""
}


//This one gets it all
function getAll() {
    hideStuff()
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => fetched(json))
  }
  let getAllP = document.getElementById('getAllP')
    .addEventListener('click', getAll);



//this one get post #10
function get10P(){
    hideStuff();
    fetch('http://jsonplaceholder.typicode.com/posts/10')
.then((res) => res.json())
.then((data) => fetched(data))
}
let get10 = document.getElementById('get10')   
    .addEventListener('click', get10P);




//This makes a new one
  function CreateP() {
    hideStuff()
    const newP = {
      title: 'Created Post',
      body: 'You have created a New Post',
      userId: 47
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(newP),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(response => response.json())
    .then(json => fetched(json))
  }

  
let createNP = document.getElementById('createNP')
.addEventListener('click', CreateP);

//replaceing a post
function replace12(){
    hideStuff()
    fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'PUT',
    body: JSON.stringify({
    title: 'Replaced',
    body: 'Your post has been replaced',
    userId: 12,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then(response => response.json())
.then(json => fetched(json))
}
let replaceP = document.getElementById('replaceP')
    .addEventListener('click', replace12);


function update12(){
    hideStuff()
    fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'PATCH',
    body: JSON.stringify({
    title: 'Updated Title',
    body: 'Your post title has been Updated',
    userId: 12,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then(response => response.json())
.then(json => fetched(json))
}
let updateP = document.getElementById('updateP')
    .addEventListener('click', update12);


function deletePost(){
    hideStuff()
    fetch('https://jsonplaceholder.typicode.com/posts/12', {
        method: 'DELETE',
})
.then(response => response.json())
.then(json => fetched(json))
}


let deleteP = document.getElementById('deleteP')
    .addEventListener('click', deletePost);