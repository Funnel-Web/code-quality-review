const shaKey = 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad' // this is not a real key

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
