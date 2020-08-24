function sequence(input) {

    let num = Number(input.shift());

    let sum = 1;

    while (sum <= num) {

        console.log(sum);

        sum = sum * 2 + 1;
    }
}

sequence(["8"]);
