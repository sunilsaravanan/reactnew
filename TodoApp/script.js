let push = document.querySelector("#push");
let input = document.querySelector("#newTask input");
let task = document.querySelector("#task");

push.addEventListener("click", () => {
  if (input.value === "") {
    alert("Please Enter your task");
  } else {
    task.innerHTML += `
            <div class="task">
                <span class="taskname">
                    ${input.value}
                </span>
                <button type="button" class="delete">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `;

    let current_tasks = document.querySelectorAll(".delete");

    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    let tasks = document.querySelectorAll(".task");

    for (let i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }

    input.value = "";
  }
});
