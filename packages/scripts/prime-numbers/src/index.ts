import { getPrimes } from './prime';

const limit = 1000;
const result = getPrimes(limit);
console.log(`primes from 1 to ${limit} are: ${result.join(',')}`);