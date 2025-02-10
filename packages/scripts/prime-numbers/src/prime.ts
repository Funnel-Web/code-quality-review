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
    const primes: number[] = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes
}

export function getNextPrime(n: number) {
    let i = n + 1;
    while (!isPrime(i)) {
        i++;
    }
    return i;
}
