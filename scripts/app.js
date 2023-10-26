/** TODO: Viene del inglés: "to do", es decir, una tarea que falta por hacer */

const userInput = document.querySelector('#user-input');
const submitBtn = document.querySelector('#submit-btn');
const todosDiv = document.querySelector('.list-item__container');


submitBtn.addEventListener('click', (event) => { // hay que cambiarlo por 'submit'

    event.preventDefault()
    const userInputValue = userInput.value;
    userInput.value = '';
    const listItem = document.createElement('div');
    listItem.classList.add('list-item');
    listItem.textContent = userInputValue;
    todosDiv.appendChild(listItem);
    listItem.addEventListener('dblclick', () => {
        listItem.classList.toggle('list-item__done');
    })

})
