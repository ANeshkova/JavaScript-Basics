function newHouse(flowers, count, budget) {

    count = Number(count);
    budget = Number(budget);
    price = 0;

    //"Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
    //5	    3.80	2.80	3	2.50

    switch (flowers) {
        case "Roses":
            price = count * 5;
            if (count > 80) {
                price = price * (1 - 0.1);
            }
            break;
        case "Dahlias":
            price = count * 3.80;
            if (count > 90) {
                price = price * (1 - 0.15);
            }
            break;
        case "Tulips":
            price = count * 2.80;
            if (count > 80) {
                price = price * (1 - 0.15);
            }
            break;
        case "Narcissus":
            price = count * 3;
            if (count < 120) {
                price += price * 0.15;
            }
            break;
        case "Gladiolus":
            price = count * 2.50;
            if (count < 80) {
                price += price * 0.20;
            }
            break;
    }

    if (budget >= price) {

        console.log
        (`Hey, you have a great garden with ${count} ${flowers} and ${(budget - price).toFixed(2)} leva left.`);
        
    } else {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
    }
}

newHouse("Tulips", "88", "260");
