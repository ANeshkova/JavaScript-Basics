function alcoholMarket(whiskyPrice, beer, wine, brandy, whisky) {

    let brandyPrice = Number(whiskyPrice) / 2;
    let winePrice = brandyPrice * (1 - 0.40);
    let beerPrice = brandyPrice * (1 - 0.80);

    beer = Number(beer) * beerPrice;
    wine = Number(wine) * winePrice;
    brandy = Number(brandy) * brandyPrice;
    whisky = Number(whisky) * Number(whiskyPrice);


    let sum = beer  + wine + brandy + whisky;

    console.log(sum.toFixed(2));
}

alcoholMarket("50", "10", "3.5", "6.5", "1");
