
const _ = require("lodash");

const isValid = (password, mode) => {
  let twoSame = false;
  let onlyIncreasing = true;
  // password.length
  for (let i = 0; i < 0x6; i++) {
    switch (mode) {
      case "1":
        /* Проверка на повторяющиеся числа */
        if (password[i] === password[i + 1]) {
          twoSame = true;
        }
        /* Проверка на последовательность чисел */
        if (Number(password[i]) > Number(password[i + 1])) {
          onlyIncreasing = false;
        }

        break;

      case "2": {
        const previousDigit = password[i - 1];
        const digit = password[i];
        const nextDigit = password[i + 1];
        const digitAfterNext = password[i + 2];

        if (previousDigit !== digit &&
            digit === nextDigit &&
            digit !== digitAfterNext)
          {
            twoSame = true;
        }

        if (Number(digit) > Number(nextDigit)) {
          onlyIncreasing = false;
        }
        break;
      }

      default:
        break;
    }
  }
  /*  Если все верно то возвращаем true */
  return twoSame && onlyIncreasing;
};

const validPasswords = (input, mode) => {
  const input_range = input.split("-").map(Number);
  const range = _.range(input_range[0], input_range[1]);
  let counter = 0;
  _.forEach(range, value => {
    let digits = value.toString();
    if (isValid(digits, mode)) {
      counter++;
    }
  });
  return counter;
};
module.exports.validPasswords = validPasswords;
