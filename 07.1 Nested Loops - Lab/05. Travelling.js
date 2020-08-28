function travelling(input) {

    let destination = input.shift();
    let price = Number(input.shift());

    let sum = 0;

    while (destination != "End") {

        while (sum < price) {
            let money = Number(input.shift());
            sum += money;
        }

        console.log(`Going to ${destination}!`);
        sum = 0;

        destination = input.shift();
        price = Number(input.shift());
    }
}

travelling([
    "Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End",
]);
