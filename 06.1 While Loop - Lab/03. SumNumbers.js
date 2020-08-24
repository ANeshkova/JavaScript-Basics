function sumNumbers(input) {

    let text = input.shift();

    let sum = 0;

    while (text != "Stop") {

        sum += Number(text);
        text = input.shift();
    }
    console.log(sum);
}

sumNumbers(["10", "20", "30", "45", "Stop"]);
