const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const removeTaskBtn = document.getElementById('removeTaskBtn');
const taskList = document.getElementById('taskList');

let tasks = [];

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push(taskText);
        updateTaskList();
        taskInput.value = ''; 
    }
});

removeTaskBtn.addEventListener('click', () => {
    tasks.pop(); 
    updateTaskList();
});

function updateTaskList() {
    taskList.innerHTML = ''; 
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    });
}
