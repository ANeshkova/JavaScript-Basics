function graduation(input) {

    let name = input.shift();
    let count = 1;
    let sum = 0;

    while (count <= 12) {

        let grade = Number(input.shift());

        if (grade >= 4) {
            sum += grade;
        } else {
            count--;
        }
        count++;
    }
    let averageGrade = sum / 12;
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
}

graduation([
    "Pesho",
    "4",
    "5.5",
    "6",
    "5.43",
    "4.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"
]);
