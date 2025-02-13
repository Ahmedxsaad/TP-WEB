const todos = [];

const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center","mb-2");

    const todoText = document.createElement("div");
    todoText.innerHTML = `<strong>${todo.name} :</strong> ${todo.content}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-outline-danger", "btn-sm");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      todos.splice(index, 1);
      renderTodos();
    });

    li.appendChild(todoText);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

addTodoBtn.addEventListener("click", () => {
  const nameInput = document.getElementById("name");
  const contentInput = document.getElementById("content");

  const name = nameInput.value.trim();
  const content = contentInput.value.trim();

  if (!name || !content) return;

  todos.push({ name, content });

  renderTodos();

  nameInput.value = "";
  contentInput.value = "";
});
