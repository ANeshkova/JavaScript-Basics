function equalSumsEvenOddPosition(input) {

    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
    
    let printLine = "";

    for (let i = num1; i <= num2; i++) {
        let oddSum = 0;
        let evenSum = 0;

        let currentNum = "" + i;

        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum[j]);

            if (j % 2 == 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }

        if (oddSum == evenSum) {
            printLine += i + " ";
        }
    }
    console.log(printLine);
}

equalSumsEvenOddPosition(["100000", "100050"]);
