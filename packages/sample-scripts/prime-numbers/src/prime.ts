function isPrime(n: number): boolean {
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

function getPrimes(n: number) {
    const primes: number[] = [1];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    console.log(`primes from 1 to ${n} are: ${primes.join(',')}`);
}

getPrimes(1000)