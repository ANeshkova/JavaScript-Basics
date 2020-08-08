function petShop(dogs, animals) {
    let dogsFood = Number(dogs) * 2.50;
    let animalsFood = Number(animals) * 4;

    let sum = dogsFood + animalsFood;

    console.log(sum.toFixed(2) + " lv.");
}

petShop("5", "4");