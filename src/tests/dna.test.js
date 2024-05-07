const dnaStringVal = require('../dna');

describe('DNA String Valorate', () => {
    it('Returns an empty string for an empty DNA string', () => {
        const result = dnaStringVal('');
        expect(result).toBe('');
    });

    it('Filters DNA string', () => {
        const result = dnaStringVal('');
        expect(result).toBe('');
    });
});