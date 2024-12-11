document.getElementById("addTaskButton").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        
        // Luo uusi tehtävä
        const newTask = document.createElement("li");
        newTask.textContent = taskText;

        // Luo Poista-painike tehtävälle
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Poista";
        deleteButton.addEventListener("click", function() {
            taskList.removeChild(newTask);
        });

        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);

        // Tyhjennä tekstikenttä
        taskInput.value = "";
    }
});
