let button = document.querySelector("button");
let taskList = document.querySelector("ul");
let inputField = document.querySelector("input");

// Add Event Listener on the button
button.addEventListener("click", function () {
  let newTask = inputField.value;

  if (newTask.trim() !== "") { 
    let newList = document.createElement("li");
    // Set inner text of the list element to be the input field value
    newList.innerText = newTask;
    taskList.appendChild(newList);

    // Save the new task to local storage
    let storedTodos = localStorage.getItem("myTodoItems");
    let todoArray = storedTodos ? JSON.parse(storedTodos) : [];
    todoArray.push(newTask);
    localStorage.setItem("myTodoItems", JSON.stringify(todoArray));

    // Clear the input field for another task to be added
    inputField.value = "";
  }
});



// ON PAGE LOAD, GET ALL THE TO-DOS FROM THE LOCAL STORAGE.
document.addEventListener('DOMContentLoaded', function() {
    let storedTodos = localStorage.getItem("myTodoItems");

    if (storedTodos !== null) {
        let currentTodos = JSON.parse(storedTodos);
        currentTodos.forEach(function(todo) {
            // Create a list element
            let newListElement = document.createElement("li");
            // Set inner text of the list element to be the input value
            newListElement.innerText = todo;
            // Add new task element to the tasklist
            taskList.appendChild(newListElement);
        });
    }
});
