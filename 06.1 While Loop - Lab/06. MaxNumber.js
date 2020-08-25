function maxNumber(input) {

    let n = Number(input.shift());

    let maxNumber = Number.MIN_SAFE_INTEGER;

    while (n != 0) {

        let num = Number(input.shift());

        if (num > maxNumber) {
            maxNumber = num;
        }
        n--;
    }
    console.log(maxNumber);
}

maxNumber(["2", "100", "99"]);
