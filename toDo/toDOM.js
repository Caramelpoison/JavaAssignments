function newTask(task){

    var newT = document.createElement("li")
    newT.innerText = task

    const toDoList = document.getElementById("toDoList")
    toDoList.appendChild(newT)
}

const addToButton = document.querySelector("#addTask")
addToButton.addEventListener('submit', event => {
    event.preventDefault()
    const inputTask = document.getElementById("inputTask").value
    newTask(inputTask)
    addToButton.reset()
})

const toDolist = document.getElementById("toDoList")
toDolist.addEventListener('click', event => {
    const liTask = event.target;
    if (liTask.tagName === "LI") {
        liTask.remove();
    }
  });