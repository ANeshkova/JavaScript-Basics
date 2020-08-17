function skiTrip(days, room, rating) {

    days = Number(days) - 1;

    let price = 0;

    if (days < 10) {
        if (room == "room for one person") {
            price = days * 18.00;
            if (rating == "positive") {
                price += price * 0.25;
            } else {
                price -= price * 0.10;
            }
        } else if (room == "apartment") {
            price = (days * 25.00) * (1 - 0.30);
            if (rating == "positive") {
                price += price * 0.25;
            } else {
                price -= price * 0.10;
            }
        } else {
            price = (days * 35.00) * (1 - 0.10);
            if (rating == "positive") {
                price += price * 0.25;
            } else {
                price -= price * 0.10;
            }
        }
    } else if (days >= 10 && days <= 15) {
        if (room == "room for one person") {
            price = days * 18.00;
            if (rating == "positive") {
                price += price * 0.25;
            } else {
                price -= price * 0.10;
            }
        } else if (room == "apartment") {
            price = (days * 25.00) * (1 - 0.35);
            if (rating == "positive") {
                price += price * 0.25;
            } else {
                price -= price * 0.10;
            }
        } else {
            price = (days * 35.00) * (1 - 0.15);
            if (rating == "positive") {
                price += price * 0.25;
            } else {
                price -= price * 0.10;
            }
        }
    } else {
        if (room == "room for one person") {
            price = days * 18.00;
            if (rating == "positive") {
                price += price * 0.25;
            } else {
                price -= price * 0.10;
            }
        } else if (room == "apartment") {
            price = (days * 25.00) * (1 - 0.50);
            if (rating == "positive") {
                price += price * 0.25;
            } else {
                price -= price * 0.10;
            }
        } else {
            price = (days * 35.00) * (1 - 0.20);
            if (rating == "positive") {
                price += price * 0.25;
            } else {
                price -= price * 0.10;
            }
        }
    }

    console.log(price.toFixed(2));
}

skiTrip("30", "president apartment", "negative");
