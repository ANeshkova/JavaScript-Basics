function sumOfTwoNumbers(input) {

    let start = Number(input.shift());
    let end = Number(input.shift());
    let magicNumber = Number(input.shift());
    let counter = 0;
    let firstNum = 0;
    let secondNum = 0;
    let sum = 0;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            sum = i + j;
            counter++;
            firstNum = i;
            secondNum = j;
            if (sum == magicNumber) {
                break;
            }
        }
		
        if (sum == magicNumber) {
            break;
        }
    }
	
    if (sum == magicNumber) {
        console.log(`Combination N:${counter} (${firstNum} + ${secondNum} = ${magicNumber})`);
    } else {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}

sumOfTwoNumbers(["1", "10", "5"]);
