var apples = document.getElementsByTagName("li")[1];

//this changes the text within the list 
apples.innerText = 'Granny Smith Apples';

//This will remove things that match the string
var oat = document.getElementsByTagName("li")[3];
oat.remove();

//This will add stuff
var kam = document.createElement("li")
kam.innerText = 'Kombucha';
const list = document.querySelector('ul');
list.appendChild(kam);

//remove it all
var wholeList = document.getElementById("list");
wholeList.remove();

//Make the array 
var newList = ['protein bars', 'almonds', 'peanut butter'];

//add new ul to heading 
var ulNewList = document.createElement("ul");
var shopHead = document.querySelector('h2');
shopHead.appendChild(ulNewList);

//add elements to list 
var pb = document.createElement("li")
pb.innerText = newList[0]
ulNewList.appendChild(pb);

var al = document.createElement("li")
al.innerText = newList[1]
ulNewList.appendChild(al);

var pbb = document.createElement("li")
pbb.innerText = newList[2]
ulNewList.appendChild(pbb);

//How you add the class
al.classList.add('important')

console.log(al)






