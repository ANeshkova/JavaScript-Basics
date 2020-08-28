function building(input) {

    let floor = Number(input.shift());
    let rooms = Number(input.shift());

    let printLine = "";

    for (let i = floor; i > 0; i--) {
        for (let j = 0; j < rooms; j++) {
            if (i == floor) {
               printLine += `L${i}${j} `;
               
            } else if (i % 2 == 0) {
                printLine += `O${i}${j} `;

            } else {
                printLine += `A${i}${j} `;
            }
        }
		
        console.log(printLine);
        printLine = "";
    }
}

building(["6", "4"]);
