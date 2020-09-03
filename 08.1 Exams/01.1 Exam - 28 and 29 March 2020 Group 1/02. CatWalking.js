function catWalking(walkMinutes, walkTimes, calories) {

    let walkMinutesSum = Number(walkMinutes) * Number(walkTimes);
    let burnedCalories = walkMinutesSum * 5;

    let halfCalories = Number(calories) / 2;

    if (burnedCalories >= halfCalories) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCalories}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCalories}.`);
    }
}

catWalking(30, 3, 600);
