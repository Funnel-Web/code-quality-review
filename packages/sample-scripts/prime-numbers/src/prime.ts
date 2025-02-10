export function isPrime(n: number): boolean {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

export function getPrimes(n: number) {
    const primes: number[] = [1];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes
}

const limit = 1000;
const result = getPrimes(limit);
console.log(`primes from 1 to ${limit} are: ${result.join(',')}`);
