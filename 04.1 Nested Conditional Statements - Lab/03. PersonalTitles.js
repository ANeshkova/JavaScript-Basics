function personalTitles(age, gender) {

    age = Number(age);

    if (gender == 'm') {
        if (age < 16) {
            console.log("Master");
        } else {
            console.log("Mr.");
        }
    } else {
        if (age < 16) {
            console.log("Miss");
        } else {
            console.log("Ms.");
        }
    }
}

personalTitles(12, 'f');
