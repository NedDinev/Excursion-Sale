function excursionSale(input) {
  let index = 0;
  let seaExcursionsQuantity = Number(input[index]);
  index++;
  let mountainExcursionsQuantity = Number(input[index]);
  index++;
  let command = input[index];
  let counter1 = 0;
  let counter2 = 0;
  let allExcursionPrice =
    seaExcursionsQuantity * 680 + mountainExcursionsQuantity * 499;
  let finalProfit = 0;

  let noExcursions = false;
  while (command !== "Stop") {
    command = input[index];
    index++;
    if (command == "sea" && seaExcursionsQuantity !== 0) {
      if (counter1 >= 1) {
        counter1 = 0;
        finalProfit += 0;
      }
      if (command == "sea") {
        counter1 += 1;
        finalProfit += 680;
        seaExcursionsQuantity -= 1;
      }
    } else if (command == "mountain" && mountainExcursionsQuantity !== 0) {
      if (counter2 >= 1) {
        counter2 = 0;
        finalProfit += 0;
      }
      if (command == "mountain") {
        counter2 += 1;
        finalProfit += 499;
        mountainExcursionsQuantity -= 1;
      }
    }

    if (mountainExcursionsQuantity + seaExcursionsQuantity == 0) {
      console.log("Good job! Everything is sold.");
      console.log(`Profit: ${finalProfit} leva.`);
      noExcursions = true;
      break;
    }
  }

  if (!noExcursions) {
    console.log(`Profit: ${finalProfit} leva.`);
  }
}

excursionSale(["2", "2", "sea", "mountain", "sea", "sea", "mountain"]);
