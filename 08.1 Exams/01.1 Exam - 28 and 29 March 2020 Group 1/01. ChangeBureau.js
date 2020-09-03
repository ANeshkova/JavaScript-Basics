function changeBureau(bitcoins, chineseCurrency, commission) {
    
    let bitcoinsInLeva = Number(bitcoins) * 1168;
    let chineseCurrencyInDollar = Number(chineseCurrency) * 0.15;
    let chineseCurrencyInLeva = chineseCurrencyInDollar * 1.76;
    let euro = (bitcoinsInLeva + chineseCurrencyInLeva) / 1.95;

    let finalSum = euro - (euro * (Number(commission) * 0.01));
    console.log(`${finalSum.toFixed(2)}`);
}

changeBureau(1, 5, 5);
