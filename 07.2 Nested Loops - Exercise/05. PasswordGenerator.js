function passwordGenerator(input) {

    let n = Number(input.shift());
    let l = Number(input.shift());

    let output = "";

    let letter = 97 + l;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            for (let m = 97; m < letter; m++) {
                for (let o = 97; o < letter; o++) {
                    for (let p = 1; p <= n; p++) {
                        if (p > i && p > j) {
                            let firstLetter = String.fromCharCode(m);
                            output += `${i}${j}${firstLetter}${String.fromCharCode(o)}${p} `;
                        }
                    }
                }
            }
        }
    }
    console.log(output);
}

passwordGenerator(["2", "4"]);
