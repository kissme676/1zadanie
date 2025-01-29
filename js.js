function calc() {
    const num1 = parseFloat(document.getElementById('n1').value);
    const num2 = parseFloat(document.getElementById('n2').value);
    const result = num1 + num2;
    document.getElementById('result').textContent = "Результат: " + result;
}