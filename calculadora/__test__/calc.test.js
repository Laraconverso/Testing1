const suma = require('../calc.js');

describe('Prueba de sumas', ()=>{
   test('Suma de 2 numeros', () =>{
    expect(suma(1,2)).toBe(3);
    })

    test('Suma de 0 numeros', () =>{
        expect(suma(0,0)).toBe(0);
    }) 
})
