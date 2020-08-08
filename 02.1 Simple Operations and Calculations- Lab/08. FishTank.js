function fishTank2(first, second, third, fourth) {

    let length = Number(first);
    let width = Number(second);
    let height = Number(third);
    let percent = Number(fourth);

    let volume = length * width * height;
    let litres = volume * 0.001;
    let returnPercent = percent * 0.01;

    let needLitres = litres * (1 - returnPercent);

    console.log(needLitres.toFixed(3));
    
}

fishTank2('85', '75', '47', '17');