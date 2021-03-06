function onTimeForTheExam(startHour, startMinutes, comeHour, comeMinutes) {
    
    startHour = Number(startHour);
    startMinutes = Number(startMinutes);
    comeHour = Number(comeHour);
    comeMinutes = Number(comeMinutes);

    let start = startHour * 60 + startMinutes;
    let come = comeHour * 60 + comeMinutes;
    let time = 0;
    let hours = 0;
    let minutes = 0;

    if (start == come) {
        console.log("On time");
    } else if (come > start) {
        time = come - start;
        hours = parseInt(time / 60);
        minutes = time % 60;

        console.log("Late");
        
        if (hours == 0) {
            console.log(`${minutes} minutes after the start`);
            
        } else {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours after the start`);
            } else {
                console.log(`${hours}:${minutes} hours after the start`);
            }
        }
    } else {
        time = start - come;
        hours = parseInt(time / 60);
        minutes = time % 60;

        if (time <= 30) {
            console.log("On time");
            
        } else {
            console.log("Early");
            
        }
        
        if (hours == 0) {
            console.log(`${minutes} minutes before the start`);
            
        } else {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours before the start`);
            } else {
                console.log(`${hours}:${minutes} hours before the start`);
            }
        }
    }
}

onTimeForTheExam("9", "30", "9", "50");
