function scholarship(income, averageGrade, minSalary) {

    income = Number(income);
    averageGrade = Number(averageGrade);
    minSalary = Number(minSalary);

    let socialScholarship = 0;
    let excellentScholarship = 0;

    if (averageGrade >= 4.5) {
        if (income < minSalary) {
            socialScholarship = minSalary * 0.35;
        }

        if (averageGrade >= 5.5) {
            excellentScholarship = averageGrade * 25;
        }
    }


    if (socialScholarship > excellentScholarship) {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);

    } else if (excellentScholarship > socialScholarship) {
        console.log(`You get a scholarship for excellent results ${Math.floor(excellentScholarship)} BGN`);

    } else {
        if (excellentScholarship > 0) {
            console.log(`You get a scholarship for excellent results ${Math.floor(excellentScholarship)} BGN`);
        } else {
            console.log("You cannot get a scholarship!");
        }
    }
}

scholarship("480.00", "4.60", "450.00");
