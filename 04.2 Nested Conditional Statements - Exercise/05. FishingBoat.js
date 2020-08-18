function fishingBoat(budget, season, people) {

    budget = Number(budget);
    people = Number(people);

    let price = 0;

    switch (season) {
        case "Spring":
            price = 3000;
            if (people <= 6) {
                price -= price * 0.1;
                if (people % 2 == 0) {
                    price -= price * 0.05;
                }
            } else if (people <= 11) {
                price -= price * 0.15;
                if (people % 2 == 0) {
                    price -= price * 0.05;
                }
            } else {
                price -= price * 0.25;
                if (people % 2 == 0) {
                    price -= price * 0.05;
                }
            }
            break;
        case "Summer":
            price = 4200;
            if (people <= 6) {
                price -= price * 0.1;
                if (people % 2 == 0) {
                    price -= price * 0.05;
                }
            } else if (people <= 11) {
                price -= price * 0.15;
                if (people % 2 == 0) {
                    price -= price * 0.05;
                }
            } else {
                price -= price * 0.25;
                if (people % 2 == 0) {
                    price -= price * 0.05;
                }
            }
            break;
        case "Autumn":
            price = 4200;
            if (people <= 6) {
                price -= price * 0.1;
                
            } else if (people <= 11) {
                price -= price * 0.15;
                
            } else {
                price -= price * 0.25;
            
            }
            break;
        case "Winter":
            price = 2600;
            if (people <= 6) {
                price -= price * 0.1;
                if (people % 2 == 0) {
                    price -= price * 0.05;
                }
            } else if (people <= 11) {
                price -= price * 0.15;
                if (people % 2 == 0) {
                    price -= price * 0.05;
                }
            } else {
                price -= price * 0.25;
                if (people % 2 == 0) {
                    price -= price * 0.05;
                }
            }
            break;
    }
    if (budget >= price) {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
        
    } else {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);
        
    }
}

fishingBoat("2000", "Winter", "13");
