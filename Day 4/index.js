
const result = require("./solution");
const my_range =  '128392-643281';
let res = result.validPasswords(my_range,"1");
console.log(`Вариатов пароля по первому условию: ${res}`)

res = result.validPasswords(my_range,"2");
console.log(`Вариатов пароля по второму условию: ${res}`)

// Вариатов пароля по первому условию: 2050
// Вариатов пароля по второму условию: 1390
