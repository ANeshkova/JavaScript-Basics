function lotaryStatistics(n) {

    n = Number(n);

    let odd1Digit = 0;
    let even = 0;
    let oddEnd7 = 0;
    let numDevide100WithoutRemainder = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            if (i < 10) {
                odd1Digit++;
            }
            if (i % 10 == 7) {
                oddEnd7++;
            }
        }
        if (i % 2 == 0) {
            even++;
        }
        if (100 % i == 0) {
            numDevide100WithoutRemainder++;
        }
    }
    console.log((odd1Digit / n * 100).toFixed(2) + "%");
    console.log((even / n * 100).toFixed(2) + "%");
    console.log((oddEnd7 / n * 100).toFixed(2) + "%");
    console.log((numDevide100WithoutRemainder / n * 100).toFixed(2) + "%");
}

lotaryStatistics("49");
