const fs = require("fs");

const InputCode = input => {
  return fs
    .readFileSync(`Day 2/${input}`, "utf8")
    .split(",")
    .map(Number);
};

const intProgram = (input, rewrite = []) => {
  let memoryState = InputCode(input);
  let position = 0;
  const stop = 99;
  //Условие задачи
  if (rewrite.length) {
    memoryState[1] = rewrite[0];
    memoryState[2] = rewrite[1];
    // console.log("reWritten intCodes!");
  }

  while (memoryState[position] !== stop) {
    const opcode = memoryState[position];
    const input1 = memoryState[memoryState[position + 1]];
    const input2 = memoryState[memoryState[position + 2]];
    const output = memoryState[position + 3];

    if (opcode === 1) {
      memoryState[output] = input1 + input2;
    } else if (opcode === 2) {
      memoryState[output] = input1 * input2;
    }
    position += 4;
  }
  return memoryState;
};
module.exports.intProgram = intProgram;

const intCodeProgram = (input, output = 19690720) => {
  let memoryState = InputCode(input);
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      const memory = [...memoryState];

      let instructionPointer = 0;

      memory[1] = noun;
      memory[2] = verb;

      while (memory[instructionPointer] !== 99) {
        const opcode = memory[instructionPointer];
        const parameter1 = memory[memory[instructionPointer + 1]];
        const parameter2 = memory[memory[instructionPointer + 2]];
        const parameter3 = memory[instructionPointer + 3];

        if (opcode === 1) {
          memory[parameter3] = parameter1 + parameter2;
        } else if (opcode === 2) {
          memory[parameter3] = parameter1 * parameter2;
        }

        instructionPointer += 4;
      }

      if (memory[0] === output) {
        return 100 * noun + verb;
      }
    }
  }
};
module.exports.intCodeProgram = intCodeProgram;
