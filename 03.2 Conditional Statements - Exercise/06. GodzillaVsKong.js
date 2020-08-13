function godzillaVsKong(budget, statisticians, clothingPrice) {

    budget = Number(budget);
    statisticians = Number(statisticians);
    clothingPrice = Number(clothingPrice) * statisticians;

    let decor = budget * 0.1;

    if (statisticians > 150) {
        clothingPrice = clothingPrice * (1 - 0.1);
    }

    let expense = decor + clothingPrice;

    if (expense > budget) {
        let neededMoney = expense - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`);
        
    } else {
        let remainingMoney = budget - expense;
        console.log("Action!");
        console.log(`Wingard starts filming with ${remainingMoney.toFixed(2)} leva left.`);
    }
}

godzillaVsKong("20000", "120", "55.5");
