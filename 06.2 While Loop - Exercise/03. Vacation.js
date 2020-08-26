function vacation(input) {
    
    let neededMoney = Number(input.shift());
    let money = Number(input.shift());

    let days = 0;
    let spendCount = 0;

    while (spendCount != 5) {

        let text = input.shift();
        let sum = Number(input.shift());
        days++;

        if (text == "spend") {

            if (money <= sum) {
                money = 0;
            } else {
                money -= sum;
            }
            spendCount++;

        } else {
            money += sum;
            spendCount = 0;

            if (money >= neededMoney) {
                break;
            }
        }
    }
    if (money >= neededMoney) {
        console.log(`You saved the money for ${days} days.`);       
    } else {
        console.log("You can't save the money.");
        console.log(days);      
    }
}

vacation([
    "2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"
]);
