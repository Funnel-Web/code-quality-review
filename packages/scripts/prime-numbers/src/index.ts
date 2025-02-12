import { getPrimes, getNextPrime, getPrevPrime } from './prime';

const limit = 1000;
const result = getPrimes(limit);
console.log(`primes from 1 to ${limit} are: ${result.join(',')}`);

console.log('The prime after 13 is', getNextPrime(13));
console.log('The prime before 13 is', getPrevPrime(3));