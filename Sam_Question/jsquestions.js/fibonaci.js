function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function printFibonacci(n) {
  for (let i = 0; i < n; i++) {
    console.log(fibonacci(i));
  }
}

printFibonacci(7);

