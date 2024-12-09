// Funcionalidades Lógicas

const compareBtn = document.getElementById('compareBtn');
const comparisonResult = document.getElementById('comparisonResult');

compareBtn.addEventListener('click', () => {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    if (num1 > num2) {
        comparisonResult.innerText = `El número mayor es: ${num1}`;
    } else if (num1 < num2) {
        comparisonResult.innerText = `El número mayor es: ${num2}`;
    } else {
        comparisonResult.innerText = 'Los números son iguales.';
    }
});

// Funcionalidad para mostrar el mes
const monthBtn = document.getElementById('monthBtn');

monthBtn.addEventListener('click', () => {
    const monthNum = Number(document.getElementById('monthNum').value);
    const month = (() => {
        switch(monthNum) {
            case 1: return 'Enero';
            case 2: return 'Febrero';
            case 3: return 'Marzo';
            case 4: return 'Abril';
            case 5: return 'Mayo';
            case 6: return 'Junio';
            case 7: return 'Julio';
            case 8: return 'Agosto';
            case 9: return 'Septiembre';
            case 10: return 'Octubre';
            case 11: return 'Noviembre';
            case 12: return 'Diciembre';
            default: return 'Número inválido';
        }
    })();
    alert(month);
});

// Funcionalidad para agregar nombres
const addNameBtn = document.getElementById('addNameBtn');
const nameList = document.getElementById('nameList');
let namesArray = [];

addNameBtn.addEventListener('click', () => {
    const name = document.getElementById('nameInput').value;
    if (name) {
        namesArray.push(name);
        nameList.innerHTML = namesArray.map(n => `<div>${n}</div>`).join('');
        document.getElementById('nameInput').value = ''; // Limpiar el input
    }
});
