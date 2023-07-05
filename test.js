export function fibonacciSeriesPrinter(number) {
  var fibonacciSeries = function* (number) {
    if (number === 0) {
      return [0];
    } else if (number === 1) {
      return [1, 1];
    } else {
      fibonacciSeriesPrinter(number - 1) + fibonacciSeriesPrinter(number - 2);
      //   var values = fibonacciSeries(number - 1);
      //   values.push(values[values.length - 1] + values[values.length - 2]);
      //   yield values;
    }
  };

  return fibonacciSeries(number).next().value;
}

function fibonacci(n) {
  return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}
