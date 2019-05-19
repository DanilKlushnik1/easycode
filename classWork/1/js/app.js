// Task manager
// 1. создать задачу
//      а. обработка формы
//          - проверить данные перед добавлением (валидация)
//      б. добавить задачу в массив
//      в. добавить данные в таблицу
//      г. офистить форму
// 2. удалить задачу
//      а. подтверждение
//      б. удаление данных из таблицы
//      в. удаление данных из массива 
// 3. редактировать задачу 
//      а. взять данные из массива
//      б. поместить в форму 
//      в. обработать форму на редактирование
//          - валидация
//      г. обновить данные в массиве
//      д. обновить данные в таблице
//      е. офистить форму

// task = {
//     id: {
//         type: 'String',
//         required: true
//     },
//     title: {
//         type: 'String',
//         required: true
//     },
//     text: {
//         type: 'String',
//         required: true
//     }
// }

// ;(function () {
    
    let storage = {
        todos: []
    };

    // UI Elements
    const table = document.querySelector('.table tbody');
    const form = document.forms['addTodoForm'];
    const title = form.elements['title'];
    const text = form.elements['text'];

    // click, keyUp, keyDown, submit
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (!title.value || !text.value) return console.log('Введите title и text');

        addNewTodoToStorage(title.value, text.value);

        form.reset();
    });

    function alertMessage(isError, message) {

        setTimeout(function () {
            console.log('remove');
        }, 2000);
    }

   

    /**
     * 
     */
    function generateId() {
        const words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        let id = '';

        for (let char of words) {
            let index = Math.floor(Math.random() * words.length);
            id += words[index];
        }

        return id;
    }

    /**
     * 
     * @param {*} title 
     * @param {*} text 
     */
    function addNewTodoToStorage(title, text) {
        if (!title) return console.log('Введите заголовок задачи');
        if (!text) return console.log('Введите текст задачи');

        const newTask = {
            title,
            text, 
            id: generateId()
        };

        storage.todos.push(newTask);

        // Добавим в разметку
        addNewTodoToView(newTask);
        
        return storage.todos;
    }

    addNewTodoToStorage('My title 1', 'My text 1');

    /**
     * 
     * @param {*} id 
     */
    function deleteTodoFromStorage(id) {
        const checkIdRes = checkId(id);
        if (checkIdRes.error) return console.log(checkIdRes.msg);

        let removedTask;

        for (let i = 0; i < storage.todos.length; i++) {
            if (storage.todos[i].id === id) {
                removedTask = storage.todos.splice(i, 1);
                break;
            }
        }

        deleteTodoFromView(id);
        
        return removedTask;
    }

    function checkId(id) {
        if (!id) return { error: true, msg: 'Передайте id задачи' };

        const checkId = storage.todos.some(function(task, i) { 
            return task.id === id 
        });
        if (!checkId) return { error: true, msg: 'id несуществуе' };

        return { error: false, msg: '' };
    }

    /**
     * 
     * @param {*} id 
     * @param {*} title 
     * @param {*} text 
     */
    function editTaskStorage(id, title, text) {

    }

    function deleteTodoFromView(id) {
        const target = document.querySelector(`[data-id="${id}"]`);
        target.parentElement.removeChild(target);
    }

    /**
     * 
     * @param {*} task 
     */
    function addNewTodoToView(task) {
        const template = todoTemplate(task);
        table.insertAdjacentHTML('afterbegin', template);
    }

    /**
     * 
     * @param {*} task 
     */
    function todoTemplate(task) {
        return `
            <tr data-id="${task.id}"> 
                <td>${task.title}</td>
                <td>${task.text}</td>
                <td>
                    <i class="fas fa-trash"></i>
                    <i class="fas fa-edit"></i>
                </td>
            </tr>
        `;
    }

// })();