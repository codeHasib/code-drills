let tasks = [];

let inputEl = document.querySelector("#inputEl");
let addBtn = document.querySelector("#add-btn");
let taskDisplay = document.querySelector("#taskList");

function addTask(task) {
  taskDisplay.innerHTML = "";
  task.forEach((item, ind) => {
    let li = document.createElement("li");
    li.textContent = item;
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => {
      tasks.splice(ind, 1);
      againAppend();
    });
    li.append(delBtn);
    taskDisplay.append(li);
  });
}

function againAppend() {
  addTask(tasks);
}

addBtn.addEventListener("click", () => {
  let value = inputEl.value.trim();
  tasks.push(value);
  addTask(tasks);
  inputEl.value = "";
});