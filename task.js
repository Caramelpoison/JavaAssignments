let taskManager = (function(){

    let tasks = [];

    function addTask(newTask){
        tasks.push(newTask);
    }

    function displayTasks (){
        console.log(tasks);
    }
    return {
        addTask: addTask,
        displayTasks: displayTasks
    };
    }
)();

taskManager.addTask('Shampoo cat');
taskManager.addTask('Feed rat lucky charms');
taskManager.displayTasks();
