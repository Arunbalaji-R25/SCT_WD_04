document.addEventListener("DOMContentLoaded", () => updateProgress());

function addTask() {
    let taskInput = document.getElementById("task");
    let timeInput = document.getElementById("task-time");
    let taskList = document.getElementById("task-list");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    let taskText = document.createElement("span");
    taskText.textContent = `${taskInput.value} (Due: ${timeInput.value})`;

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.onclick = function () {
        li.classList.toggle("completed");
        updateProgress();
    };

    let editBtn = document.createElement("button");
    editBtn.textContent = "✏";
    editBtn.onclick = function () {
        let newText = prompt("Edit task:", taskText.textContent);
        if (newText) taskText.textContent = newText;
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
        updateProgress();
    };

    li.appendChild(taskText);
    li.appendChild(completeBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    timeInput.value = "";
    updateProgress();
}

function updateProgress() {
    let tasks = document.querySelectorAll("#task-list li");
    let completedTasks = document.querySelectorAll("#task-list .completed");
    let progressBar = document.querySelector(".progress-bar");
    let progressText = document.getElementById("progress-text");

    let progress = tasks.length > 0 ? (completedTasks.length / tasks.length) * 100 : 0;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${Math.round(progress)}% Completed`;
}
