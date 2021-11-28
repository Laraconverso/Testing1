const { generateText, validateInput, createElement } = require('../.js');

describe('Pruebas de salida de datos', () => {
    test('Salida con datos', () =>{
        const text = generateText('Daniel',30);
        expect(text).toBe('Daniel (30 years old)');
    });
      
    test('Salida con datos vacios', () =>{
        const text = generateText('',null);
        expect(text).toBe(' (null years old)');    
    });
    
    test('Salida sin datos', () =>{
        const text = generateText();
        expect(text).toBe('undefined (undefined years old)');    
    });
});

describe('Prueba de validacion', () =>{
    test('Validacion con texto', () =>{
        const text = validateInput('HOLA', true, false);
        expect(text).toBeTruthy();
    });
    test('Validacion con numero', () =>{
        const numero = validateInput(2, false, true);
        expect(numero).toBeTruthy();
    });
    test('Validacion con vacio', () =>{
        const vacio = validateInput('', false, false);
        expect(vacio).toBeFalsy();
    });
});

describe('Prueba creacion', ()=>{
    test('Creacion con datos', ()=>{
        const elemento = createElement('li', 'Hola', 'user-item');
        expect(elemento.innerHTML).toBe('<li></li>');
    })
})