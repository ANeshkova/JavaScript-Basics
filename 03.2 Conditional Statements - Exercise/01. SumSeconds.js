function sumSeconds(first, second, third) {

    first = Number(first);
    second = Number(second);
    third = Number(third);

    let sum = first + second + third;

    let minutes = parseInt(sum / 60);
    let seconds = sum % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds("35", "45", "44");
