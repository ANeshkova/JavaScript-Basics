function graduationPt2(input) {

    let name = input.shift();
    let count = 1;
    let sum = 0;
    let excluded = 0;

    while (count <= 12) {

        let grade = Number(input.shift());

        if (grade >= 4) {
            sum += grade;
        } else {
            excluded++;
            if (excluded == 2) {
                break;
            }
            count--;
        }
        count++;
    }

    if (count < 12) {
        console.log(`${name} has been excluded at ${count} grade`);
    } else {
        let averageGrade = sum / 12;
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}

graduationPt2([
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
