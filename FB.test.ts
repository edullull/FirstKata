

import { FB } from "./FB";

test('Prueba1', ()=>{
    //expect(FB(1)).toBe(1);
    expect(FB(15)).toBe('FIZZBUZZ');

})

test('Prueba2', ()=>{
    expect(FB(1)).toBe(1);
    expect(FB(15)).toBe('FIZZBUZZ');

})