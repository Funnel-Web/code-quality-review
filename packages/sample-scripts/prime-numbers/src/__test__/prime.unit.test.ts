import { describe, expect, it } from 'vitest';
import { isPrime, getPrimes } from '../prime';

describe('Prime number test', () => {
    it('should return true for prime numbers and false for non prime', () => {
        const shouldBePrime = isPrime(13);
        const shoultnotBePrime = isPrime(10);

        expect(shouldBePrime).toBe(true);
        expect(shoultnotBePrime).toBe(false);
    });

    it('should return all prime numbers from 1 to n', () => {
        const limit = 100;
        const result = getPrimes(limit);

        expect(result).toEqual([1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);

    });
});