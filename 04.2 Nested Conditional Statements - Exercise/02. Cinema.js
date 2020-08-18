function cinema(type, rows, columns) {

    rows = Number(rows);
    columns = Number(columns);

    let places = rows * columns;
    let income = 0;

    if (type == "Premiere") {
        income = places * 12.00;
    } else if (type == "Normal") {
        income = places * 7.50;
    } else {
        income = places * 5.00;
    }

    console.log(`${income.toFixed(2)} leva`);
}

cinema("Premiere", "10", "12");
