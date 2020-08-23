function cleverLily(years, priceWashingMachine, priceFor1Toy) {

    years = Number(years);
    priceWashingMachine = Number(priceWashingMachine);
    priceFor1Toy = Number(priceFor1Toy);

    let countToys = 0;
    let savings = 0;
    let brotherMoney = 0;
    let money = 0;

    for (let i = 1; i <= years; i++) {

        if (i % 2 != 0) {
            countToys++;
        } else {
            money += 10;
            savings += money;
            brotherMoney++;
        }
    }

    let sum = savings - brotherMoney + (countToys * priceFor1Toy);

    if (sum < priceWashingMachine) {

        console.log("No! " + (priceWashingMachine - sum).toFixed(2));
        
    } else {
        console.log("Yes! " + (sum - priceWashingMachine).toFixed(2));
    }
}

cleverLily("10", "170.00", "6");
