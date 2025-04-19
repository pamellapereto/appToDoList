const input = document.getElementById('input');
const addButton = document.getElementById('addButton');
const list = document.getElementById('list');
const editButton = document.getElementById('editButton');
const deleteButton = document.getElementById('deleteButton');

const btnExcluirList = document.querySelector('.containerRemoveActions');

input.focus();

addButton.addEventListener('click', () => {
    // Mostra uma borda vermelha caso o usuario tente criar uma nv task sem nome
    if (input.value === '' || input.value === null) {
        input.classList.add('campo-tarefa-erro');
        input.focus();
        return;
    }   

    const elementList = document.createElement('li');
    const titleTask = document.createElement('p');
    const containerBtns = document.createElement('div');
    const btnEdit = document.createElement('button');
    const btnExcluir = document.createElement('button');
    const imgExcluir = document.createElement('img');
    const imgEdit = document.createElement('img');

    elementList.setAttribute('class', 'item-tarefa add-animation');
    titleTask.textContent = input.value;

    containerBtns.setAttribute('class', 'containerActionBtns');
    btnEdit.setAttribute('class', 'containerRemoveActions');
    btnExcluir.setAttribute('class', 'containerRemoveActions');

    imgEdit.setAttribute('src', '../assets/icons/edit icone.png');
    imgExcluir.setAttribute('src', '../assets/icons/delete icone.png');

    btnEdit.appendChild(imgEdit);
    btnExcluir.appendChild(imgExcluir);
    containerBtns.appendChild(btnEdit);
    containerBtns.appendChild(btnExcluir);

    elementList.appendChild(titleTask);
    elementList.appendChild(containerBtns);

    list.appendChild(elementList);

    // limpa o input
    input.value = '';
    input.focus();

    // 🧹 remove a classe de animação após concluir
    elementList.addEventListener('animationend', () => {
        elementList.classList.remove('add-animation');
    }, { once: true }); // garante que só executa uma vez
});

// Ao digitar após dar erro visual no input tira a borda vermelha
input.addEventListener('input', () => {
    if (input.classList.contains('campo-tarefa-erro') && input.value.trim() !== '') {
        input.classList.remove('campo-tarefa-erro');
    }
}); 

// Ação para deletar a task selecionada
list.addEventListener('click', (event) => {
    // verifica se o clique foi em um botão de exclusão
    const isDeleteButton = event.target.closest('button')?.querySelector('img[src="../assets/icons/delete icone.png"]');

    if (isDeleteButton) {
        const li = event.target.closest('li');
        li.classList.add('remove-animation');

        li.addEventListener('animationend', () => {
            li.remove();
        });
    }
});
