// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');

            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;

            const completeButton = document.createElement('button');
            completeButton.textContent = 'Mark as Completed';
            completeButton.addEventListener('click', () => toggleTaskCompletion(taskItem));

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteTask(taskItem));

            taskItem.appendChild(taskSpan);
            taskItem.appendChild(completeButton);
            taskItem.appendChild(deleteButton);

            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    };

    const toggleTaskCompletion = (taskItem) => {
        taskItem.classList.toggle('completed');
    };

    const deleteTask = (taskItem) => {
        taskList.removeChild(taskItem);
    };

    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
