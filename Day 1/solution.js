const fs = require("fs");
const _ = require("lodash");

const getSumOfFuel = (input, mode) => {
  let allFuel = 0;
  const fuel = fs.readFileSync(`Day 1/${input}`, "utf8").split("\n");
  _.forEach(fuel, function(value) {
    switch (mode) {
      case "1": {
        allFuel += Math.floor(value / 3) - 2;
        break;
      }
      case "2": {
        let remainingMass = value;
        while (remainingMass > 0) {
          const fuelForFuel = Math.floor(remainingMass / 3) - 2;
          if (fuelForFuel <= 0) {
            break;
          }
          allFuel += fuelForFuel;
          remainingMass = fuelForFuel;
        }
        break;
      }
      default:
        break;
    }
  });
  return allFuel;
};

module.exports.getFuel = getSumOfFuel;
