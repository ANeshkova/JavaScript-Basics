function accountBalance(input) {

    let n = Number(input.shift());

    let num = 0;
    let sum = 0;

    while (num != n) {

        let money = Number(input.shift());

        if(money < 0) {
            console.log("Invalid operation!");
            break;
        } else {
            console.log("Increase: " + money.toFixed(2));
            sum += money;
        }
        num++;
    }
    console.log("Total: " + sum.toFixed(2)); 
}

accountBalance(["3", "5.51", "69.42", "100"]);
