const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");
function toggleTheme() {
  document.body.classList.toggle("light-mode");

  const icon = document.getElementById("theme-icon");

  if(document.body.classList.contains("light-mode")){
    // Currently light mode → show moon icon
    icon.src = "./img/moon.png";   
  } else {
    // Dark mode → show sun icon
    icon.src = "./img/sun.png";  
  }
}


addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keyup", e => {
  if(e.key === "Enter") addTask();
});

function addTask(){
  const text = taskInput.value.trim();
  if(!text){
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.className = "task";

  // Task div with checkbox
  const taskDiv = document.createElement("div");
  taskDiv.style.display = "flex";
  taskDiv.style.alignItems = "center";
  taskDiv.style.gap = "8px";

  // First create <p>
  const p = document.createElement("p");
  p.textContent = text;

  // Then checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("click", () => {
    p.classList.toggle("checked");
  });

  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(p);

  // Delete icon
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "uil uil-trash delete";
  deleteIcon.addEventListener("click", () => li.remove());

  li.appendChild(taskDiv);
  li.appendChild(deleteIcon);

  taskList.appendChild(li);

  taskInput.value = "";
}
