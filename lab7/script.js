// Стек как массив
let stack = [];

// Ссылки на элементы
const stackContainer = document.getElementById('stack-container');
const pushBtn = document.getElementById('pushBtn');
const popBtn = document.getElementById('popBtn');

// Функция для обновления визуализации стека
function updateStack() {
    // Очистить контейнер перед обновлением
    stackContainer.innerHTML = '';

    // Добавить каждый элемент стека как div
    stack.forEach((item) => {
        const stackItem = document.createElement('div');
        stackItem.classList.add('stack-item');
        stackItem.innerText = item;
        stackContainer.appendChild(stackItem);
    });
}

// Добавление элемента в стек
pushBtn.addEventListener('click', () => {
    const newItem = stack.length + 1; // Элемент для добавления (число)
    stack.push(newItem); // Добавить элемент в конец массива (верх стека)
    updateStack(); // Обновить визуализацию
});

// Извлечение элемента из стека
popBtn.addEventListener('click', () => {
    if (stack.length > 0) {
        stack.pop(); // Удалить последний элемент из массива (верх стека)
        updateStack(); // Обновить визуализацию
    } else {
        alert('Стек пуст!');
    }
});
