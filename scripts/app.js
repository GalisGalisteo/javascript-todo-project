/** TODO: Viene del inglés: "to do", es decir, una tarea que falta por hacer */


const todoTasks = [];

const todoForm = document.querySelector('#todo-form');
const todosDiv = document.querySelector('.list-item__container');

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const userInput = document.querySelector('#user-input');

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
        todoTasks.forEach(todoTask => {
            if (todoTask.name === taskName) {
                todoTask.isCompleted = true;
            }
        });
        listItem.classList.toggle('list-item__done');
    })

    
})

const hideCompleted = document.querySelector('#hide-completed');
hideCompleted.addEventListener('change', (event) => {
    event.preventDefault();

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

const filterTodo = document.querySelector('#filter-todo');
filterTodo.addEventListener('change', (event) => {
    event.preventDefault();
    const valueToFilter = filterTodo.value;
    const filteredTasks = todoTasks.filter(task => task.name === valueToFilter);

    if (filterTodo.value === '') {
        todosDiv.innerHTML = '';

        todoTasks.forEach(task => {
            const filteredItem = document.createElement('div');
            filteredItem.classList.add('list-item');
            filteredItem.textContent = task.name;
            todosDiv.appendChild(filteredItem);
        });

    } else {
        todosDiv.innerHTML = '';

        filteredTasks.forEach(task => {
            const filteredItem = document.createElement('div');
            filteredItem.classList.add('list-item');
            filteredItem.textContent = task.name;
            todosDiv.appendChild(filteredItem);
        });
    }

})
