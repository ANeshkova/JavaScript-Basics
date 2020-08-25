function minNumber(input) {

    let n = Number(input.shift());
    let minNumber = Number.MAX_SAFE_INTEGER;

    while (n > 0) {
        let number = Number(input.shift());

        if (number < minNumber) {
            minNumber = number;
        }
        n--;
    }
    console.log(minNumber);
}

minNumber(["3", "-10", "20", "-30"]);
