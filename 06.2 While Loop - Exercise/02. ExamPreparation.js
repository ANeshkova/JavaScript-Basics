function examPreparation(input) {

    let badGrades = Number(input.shift());
    let bad = 0;
    let gradeCount = 0;
    let sum = 0;
    let lastProblem = "";

    let task = input.shift();

    while (task != "Enough") {

        let grade = Number(input.shift());

        if (grade <= 4) {
            bad++;
            if (bad == badGrades) {
                break;
            }
        }
        lastProblem = task;
        gradeCount++;
        sum += grade;
        task = input.shift();
    }

    if (bad == badGrades) {
        console.log(`You need a break, ${bad} poor grades.`);
        
    } else {
        console.log(`Average score: ${(sum / gradeCount).toFixed(2)}`);
        console.log(`Number of problems: ${gradeCount}`);
        console.log(`Last problem: ${lastProblem}`); 
    }
}

examPreparation([
    "3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"
]);
