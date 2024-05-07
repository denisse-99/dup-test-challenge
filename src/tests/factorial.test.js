const factorial = require('../factorial');

describe('Factorial test', () => {
    it('Calculates the factorial of 2', () => {
        expect(factorial(2)).toBe(2);
    });

    it('Calculates the factorial of 4', () => {
        expect(factorial(4)).toBe(24);
    });
}); 