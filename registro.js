// Registro de Usuarios

const userForm = document.getElementById('userForm');
const tableBody = document.getElementById('tableBody');
let usersArray = [];

userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const userId = document.getElementById('userId').value;
    const cedula = document.getElementById('cedula').value;
    const fullName = document.getElementById('fullName').value;
    const birthdate = document.getElementById('birthdate').value;
    const city = document.getElementById('city').value;

    // Validación básica
    if (userId && cedula && fullName && birthdate && city) {
        // Almacenar en el array
        usersArray.push({ userId, cedula, fullName, birthdate, city });
        // Mostrar en la tabla
        renderTable();
        // Limpiar el formulario
        userForm.reset();
    }
});

const renderTable = () => {
    tableBody.innerHTML = ''; // Limpiar tabla
    usersArray.forEach(user => {
        const row = `<tr>
            <td>${user.userId}</td>
            <td>${user.cedula}</td>
            <td>${user.fullName}</td>
            <td>${user.birthdate}</td>
            <td>${user.city}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
};
