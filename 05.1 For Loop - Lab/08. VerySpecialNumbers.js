function verySpecialNumber(start, end, n) {

    start = Number(start);
    end = Number(end);
    n = Number(n);

    for (let i = start; i <= end; i++) {

        if (i % n == 0) {
            if (i % (Math.pow(n, 2)) == 0) {
                console.log(`Very special number: ${i}`);
            } else {
                console.log(`Special number: ${i}`);
            }
        } else {
            console.log(i);
        }
    }
}

verySpecialNumber("1", "25", "3");
