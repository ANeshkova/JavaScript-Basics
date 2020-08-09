function tailoringWorkshop(tableCount, tableLenght, tableWidth) {

    tableCount = Number(tableCount);
    tableLenght = Number(tableLenght);
    tableWidth = Number(tableWidth);

    let squareSide = tableLenght / 2;
    let square = tableCount * (squareSide * squareSide);

    let cover = tableCount * ((tableLenght + 2 * 0.30) * (tableWidth + 2 * 0.30));
    
    let usd = cover * 7 + square * 9;
    let bgn = usd * 1.85;

    console.log(`${usd.toFixed(2)} USD`);
    console.log(`${bgn.toFixed(2)} BGN`);
}

tailoringWorkshop("5", "1.00", "0.50");
