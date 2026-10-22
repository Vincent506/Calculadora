function putDisplay(valor){
    const display = document.querySelector('.display');
        
    if (display.textContent === "0") {
        document.querySelector('.display').textContent = valor;
    } else {
        document.querySelector('.display').textContent += valor;
    }
}

function reset(valor){
    document.querySelector('.display').textContent = valor;
}

function calcular(){
    const display = document.querySelector('.display');
    try {
        const resultado = eval(display.textContent);
        display.textContent = resultado;
    } catch (erro) {
        display.textContent = 'Erro';
    }
}