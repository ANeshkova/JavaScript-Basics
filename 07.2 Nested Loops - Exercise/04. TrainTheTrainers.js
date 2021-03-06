function trainTheTrainers(input) {

    let n = Number(input.shift());

    let allGradeCount = 0;
    let allGradeSum = 0;

    let name = input.shift();

    while (name != "Finish") {

        let sumGrade = 0;

        for (let i = 1; i <= n; i++) {
            let grade = Number(input.shift());
            sumGrade += grade;
            allGradeSum += grade;
        }
        console.log(`${name} - ${(sumGrade / n).toFixed(2)}.`);
        
        allGradeCount += n;

        name = input.shift();
    }

    console.log(`Student's final assessment is ${(allGradeSum / allGradeCount).toFixed(2)}.`);
}

trainTheTrainers([
    "3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"
]);
