function specialNumbers2(input) {

    let n = Number(input.shift());

    let output = "";

    for (let i = 1111; i <= 9999; i++) {
        let currentNumber = i;

        let isMagic = true;

        while (currentNumber > 0) {
            let lastDigit = currentNumber % 10;

            if (n % lastDigit != 0) {
                isMagic = false;
                break;
            }

            currentNumber = Math.trunc(currentNumber / 10);
        }

        if (isMagic) {
            output += i + " ";
        }
    }
    console.log(output);
}

specialNumbers2(["3"]);
