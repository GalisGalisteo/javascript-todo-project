/** TODO: Viene del inglés: "to do", es decir, una tarea que falta por hacer */


const todoTasks = [];

const todoForm = document.querySelector('#todo-form');

todoForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const userInput = document.querySelector('#user-input');
    const todosDiv = document.querySelector('.list-item__container');

    const userInputValue = userInput.value;
    const task = {
        name: userInputValue,
        isCompleted: false
    }
    todoTasks.push(task);
    userInput.value = '';

    const listItem = document.createElement('div');
    listItem.classList.add('list-item');
    listItem.textContent = userInputValue;
    todosDiv.appendChild(listItem);

    listItem.addEventListener('dblclick', () => {
        const taskName = listItem.textContent;
        console.log("🚀 ~ file: app.js:29 ~ listItem.addEventListener ~ task:", task)
        todoTasks.forEach(todoTask => {
            if (todoTask.name === taskName) {
                todoTask.isCompleted = true;
                console.log("🚀 ~ file: app.js:33 ~ listItem.addEventListener ~ todoTask:", todoTask)
            }
        });
        listItem.classList.toggle('list-item__done');
    })

    const hideCompleted = document.querySelector('#hide-completed');
    hideCompleted.addEventListener('change', () => {
        const listItemDone = document.querySelectorAll('.list-item__done');
        if (hideCompleted.checked) {
            listItemDone.forEach(item => {
                item.style.display = 'none';
            })
        } else {
            listItemDone.forEach(item => {
                item.style.display = 'initial';
            })
        }
    })
})
