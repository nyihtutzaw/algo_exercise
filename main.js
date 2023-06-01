const readline = require('readline');

const generateIntegerSequence=(input)=>{
  const sequenceIntegers = input.split(' ').map(Number);
  const hypotheses = [];

  if (sequenceIntegers.length >= 2) {
    const diff = sequenceIntegers[1] - sequenceIntegers[0];
    hypotheses.push((prev) => prev + diff);

    if (sequenceIntegers.length >= 3) {
      const ratio = sequenceIntegers[1] / sequenceIntegers[0];
      hypotheses.push((prev) => prev * ratio);
    }
  }

  const result = [];
  for (let i = 0; i < 10; i++) {
    const prev = sequenceIntegers[sequenceIntegers.length - 1];
    let next = prev;

    for (const hypothesis of hypotheses) {
      next = hypothesis(next);
    }

    result.push(next);
    sequenceIntegers.push(next);
  }

  return result;
}

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readLine.question('Enter the sequence of integers: ', (input) => {
  const result = generateIntegerSequence(input.trim());
  console.log('Result:', result.join(' '));
  readLine.close();
});
