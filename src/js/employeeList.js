document.addEventListener('DOMContentLoaded', () => {
    const employeeInput = document.getElementById('employeeInput');
    const employeeForm = document.getElementById('employeeForm');
    const addButton = document.getElementById('addButton');
    const employeeList = document.getElementById('employeeList');
    const employees = [];

    employeeForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });

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
            e.preventDefault();
            addEmployee(employeeInput.value);
        }
    });
});