function USDtoBGN(input) {
    let usd = Number(input);
    let bgn = usd * 1.79549;

    console.log(bgn.toFixed(2));
}

USDtoBGN('20');
