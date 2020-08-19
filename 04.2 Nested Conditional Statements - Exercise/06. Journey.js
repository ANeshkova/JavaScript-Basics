function journey(budget, season) {

    budget = Number(budget);

    let destination;
    let holidayType;
    let price = 0;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season == "summer") {
            holidayType = "Camp";
            price = budget * 0.30;
        
        } else {
            holidayType = "Hotel";
            price = budget * 0.70;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season == "summer") {
            holidayType = "Camp";
            price = budget * 0.40;
        
        } else {
            holidayType = "Hotel";
            price = budget * 0.80;
        }
    } else {
        destination = "Europe";
        holidayType = "Hotel";
        price = budget * 0.90;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${holidayType} - ${price.toFixed(2)}`);
}

journey("50", "summer");
