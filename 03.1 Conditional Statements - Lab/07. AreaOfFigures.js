function areaOfFigures(figure, sideA, sideB) {

    sideA = Number(sideA);
    sideB = Number(sideB);

    let area = 0;

    if (figure == "square") {
        area = sideA * sideA;

    } else if (figure == "rectangle") {
        area = sideA * sideB;
        
    } else if (figure == "circle") {
        area = Math.PI * sideA * sideA;
        
    } else {
        area = sideA * sideB / 2;
        
    }
    console.log(area.toFixed(3));
}

areaOfFigures("triangle", "4.5", "20");
