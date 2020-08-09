function rectangleArea(x1, y1, x2, y2) {

    x1 = Number(x1);
    y1 = Number(y1);
    x2 = Number(x2);
    y2 = Number(y2);

    let firstSide = Math.abs(x1 - x2);
    let secondSide = Math.abs(y1 - y2);

    let area = firstSide * secondSide;
    let perimeter = 2 * (firstSide + secondSide);

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}

rectangleArea("60", "20", "10", "50");
