// script.js
function addTask() {
    var taskInput = document.getElementById('task-input');
    var taskName = taskInput.value.trim();
    if (taskName !== '') {
        var taskList = document.getElementById('task-list');
        var li = document.createElement('li');
        li.innerHTML = `
            <div class="task">
                <span class="task-name">${taskName}</span>
                <button class="edit" onclick="editTask(this)">Edit</button>
                <button class="delete" onclick="deleteTask(this)">Delete</button>
                <button class="complete" onclick="completeTask(this)">Complete</button>
            </div>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
}
function editTask(btn) {
    var taskName = btn.parentNode.querySelector('.task-name').textContent;
    var newTaskName = prompt('Edit task:', taskName);
    if (newTaskName !== null && newTaskName.trim() !== '') {
        btn.parentNode.querySelector('.task-name').textContent = newTaskName.trim();
    }
}
function deleteTask(btn) {
    if (confirm('Are you sure you want to delete this task?')) {
        btn.parentNode.parentNode.remove();
    }
}

function completeTask(btn) {
    btn.parentNode.querySelector('.task-name').style.textDecoration = 'line-through';
    btn.disabled = true;
}