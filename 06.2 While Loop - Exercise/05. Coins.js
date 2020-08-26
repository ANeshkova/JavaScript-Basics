function coins2(input) {

    let num = Number(input.shift());
    let counter = 0;
    let temporary = 0;

    while (num != 0.00) {

        if (num >= 2) {
            temporary = parseInt(num / 2);
            counter += temporary;
            num -= temporary * 2;
			
        } else if (num >= 1) {
            counter++;
            num--;
			
        } else if (num >= 0.50) {
            counter++;
            num -= 0.50;
			
        } else if (num >= 0.20) {
            temporary = parseInt(num / 0.20);
            counter += temporary;
            num -= temporary * 0.20;
			
        } else if (num >= 0.10) {
            counter++;
            num -= 0.10;
			
        } else if (num >= 0.05) {
            counter++;
            num -= 0.05;
			
        } else if (num >= 0.02) {
            temporary = parseInt(num / 0.02);
            counter += temporary;
            num -= temporary * 0.02;
			
        } else {  //(num >= 0.01)
            counter++;
            num -= 0.01;
        }
		
        num = Number(num.toFixed(2));
    }
	
    console.log(counter);
}

coins2(["2.73"]);
