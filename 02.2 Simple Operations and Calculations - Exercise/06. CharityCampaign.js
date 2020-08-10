function charityCampaign(days, chefs, cakes, waffles, pancakes) {

    let cakesMoney = Number(cakes) * 45;
    let wafflesMoney = Number(waffles) * 5.80;
    let pancakesMoney = Number(pancakes) * 3.20;

    let sumForOneDay = Number(chefs) * (cakesMoney + wafflesMoney + pancakesMoney);
    let sumForAllDays = Number(days) * sumForOneDay;
    let expense = sumForAllDays / 8;

    let sumWithoutExpense = sumForAllDays - expense;

    console.log(sumWithoutExpense.toFixed(2));
}

charityCampaign("20", "8", "14", "30", "16");
