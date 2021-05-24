/*En grupos. Desarrollo un programa que lea una opción y luego dos números,
posteriormente según sea la opción realizar alguna de estas operaciones:
- 1. Para sumar dos números
- 2. Para multiplicar dos números
- 3. Para dividir dos números, recuerda que la divión entre 0 da error
- 4. Para restar dos números
- Usar module.export*/ 

/*add*/

exports.Program = function calculadora (a, operation, b){
    if (operation == '+') {
        operation = a + b;
        return operation;
    } else if (operation == '*'){
        operation = a * b;
        return operation;
    } else if (operation == '/'){
        operation = a / b;
        return operation;
    }else (operation == '-'){
        operation = a - b;
        return operation;
    }
}