function timeMinutes(hours, minutes) {

    hours = Number(hours);
    minutes = Number(minutes);

    let sumMinutes = hours * 60 + minutes + 15;

    let newHours = Math.trunc(sumMinutes / 60);
    let newMinutes = sumMinutes % 60;

    if (newHours == 24) {
        newHours = 0;
    }

    if (newMinutes < 10) {
        console.log(`${newHours}:0${newMinutes}`);
        
    } else {
        console.log(`${newHours}:${newMinutes}`);
    }
}

timeMinutes("1", "46");
