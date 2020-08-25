function moving(input) {

    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());

    let volume = width * length * height;
    let neededVolume = 0;

    let text = input.shift();
    while (text != "Done") {

        neededVolume += Number(text);

        if (neededVolume > volume) {
            break;
        }

        text = input.shift();
    }
    if (text == "Done" && neededVolume <= volume) {
        console.log(`${volume - neededVolume} Cubic meters left.`);
        
    } else if (neededVolume > volume){
        console.log(`No more free space! You need ${neededVolume - volume} Cubic meters more.`);
        
    }
}

moving([
    "10",
    "1",
    "2",
    "4",
    "6",
    "Done"
]);
