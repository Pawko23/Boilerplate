const employeeInput = document.getElementById('employeeInput');
const addButton = document.getElementById('addButton');
const employeeList = document.getElementById('employeeList');

const employees = [];

const addEmployee = (name) => {
    employees.push(name);

    const li = document.createElement('li');
    li.textContent = name;
    li.classList.add('employee-container__list-item');
    employeeList.appendChild(li);

    employeeInput.value = '';
    employeeInput.focus();
};

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    addEmployee(employeeInput.value);
});

employeeInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        addEmployee(employeeInput.value);
    }
});