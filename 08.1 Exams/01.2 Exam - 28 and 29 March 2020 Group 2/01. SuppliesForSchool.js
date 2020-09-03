function suppliesForSchool(pens, markers, whiteboardCleaner, discount) {

    let pensPrice = Number(pens) * 5.80;
    let markersPrice = Number(markers) * 7.20;
    let whiteboardCleanerPrice = Number(whiteboardCleaner) * 1.20;

    let price = pensPrice + markersPrice + whiteboardCleanerPrice;
    let finalPrice = price - ((price * Number(discount)) / 100);

    console.log(`${finalPrice.toFixed(3)}`);
}

suppliesForSchool(2, 3, 2.5, 25);
