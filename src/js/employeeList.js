const input = document.getElementById('employeeInput');
const button = document.getElementById('addButton');
const list = document.getElementById('employeeList');

const employees = [];

const addEmployee = (name) => {
    employees.push(name);

    const li = document.createElement('li');
    li.textContent = name;
    li.classList.add('employee-container__list-item');
    list.appendChild(li);

    input.value = '';
    input.focus();
};

button.addEventListener('click', () => {
    addEmployee(input.value);
});

input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        addEmployee(input.value);
    }
});