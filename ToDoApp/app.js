const todoForm = document.getElementById('todoForm');

const todoInput = document.getElementById('todoInput');

const todoList = document.getElementById('todoList');

function addTask(taskText) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="deleteBtn">Delete</button>
    `;
    todoList.appendChild(li);

    const deleteBtn = li.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });
}
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = todoInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        todoInput.value = '';
    }
});

