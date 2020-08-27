function cake(input) {

    let width = Number(input.shift());
    let length = Number(input.shift());
    
    let dimensions = width * length;
    let count = dimensions;

    let text = input.shift();

    while (text != "STOP") {

        count -= Number(text);

        if (count < 0) {
            break;
        }

        text = input.shift();
    }
    if (count < 0) {
        console.log(`No more cake left! You need ${Math.abs(count)} pieces more.`);
        
    } else {
        console.log(`${count} pieces are left.`);
    }
}

cake(["10", "10", "20", "20", "20", "20", "21"]);
