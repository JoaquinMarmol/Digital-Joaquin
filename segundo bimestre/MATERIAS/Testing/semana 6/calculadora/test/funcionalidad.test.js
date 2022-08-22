const calc = require('../calc')

// test('', () => {
//     const operacion = calc.
//     expect(operacion).toBe()
// })

describe('calculadora', () => {

    test('suma numero string', () => {
        const operacion = calc.suma('1', '1');
        expect(operacion).toBe(0)
    }),

    test('suma string', () => {
        const operacion = calc.suma('a', 'b');
        expect(operacion).toBe(0)
    }),

    test('suma null', () => {
        const operacion = calc.suma(null, null);
        expect(operacion).toBe(0)
    }),

    test('suma boolean', () => {
        const operacion = calc.suma(false, true);
        expect(operacion).toBe(0)
    }),

    test('suma undefined', () => {
        const operacion = calc.suma(undefined, undefined);
        expect(operacion).toBe(0)
    }),

    test('suma array', () => {
        const operacion = calc.suma([1, 1], [1, 1]);
        expect(operacion).toBe(0)
    }),

    test('resta', () => {
        const operacion = calc.resta(2, 4)
        expect(operacion).toBe(-2)
}),
    test('division', () => {
        const operacion = calc.division(10, 5)
        expect(operacion).toBe(2)
    }),

    test('multiplicacion', () => {
        const operacion = calc.multiplicacion(20, 20)
        expect(operacion).toBe(400)
    })

})

