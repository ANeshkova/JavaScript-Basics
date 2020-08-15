function toyShop(tripPrice, puzzle, doll, bear, minion, truck) {

    puzzle = Number(puzzle);
    doll = Number(doll);
    bear = Number(bear);
    minion = Number(minion);
    truck = Number(truck);

    let toysCount = puzzle + doll + bear + minion + truck;
    let toysPrice = puzzle * 2.60 + doll * 3 + bear * 4.10 + minion * 8.20 + truck * 2;

    if (toysCount >= 50) {
        toysPrice = toysPrice * (1 - 0.25);
    }
    
    let sumWithotRent = toysPrice * (1 - 0.10);

    if (sumWithotRent >= tripPrice) {
        let remainingMoney = sumWithotRent - tripPrice;
        console.log(`Yes! ${remainingMoney.toFixed(2)} lv left.`);
    } else {
        let neededMoney = tripPrice - sumWithotRent;
        console.log(`Not enough money! ${neededMoney.toFixed(2)} lv needed.`);
    }
}

toyShop("40.8", "20", "25", "30", "50", "10");
