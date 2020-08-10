function danceHall(length, width, wardrobeSide) {

    length = Number(length);
    width = Number(width);
    wardrobeSide = Number(wardrobeSide);

    let wardrobe = (wardrobeSide * 100) * (wardrobeSide * 100);
    let hall = (length * 100) * (width * 100);
    let bench = hall / 10;

    let spaceWithoutPeople = hall - (wardrobe + bench);
    let peopleSpace = spaceWithoutPeople / (40 + 7000);

    console.log(Math.floor(peopleSpace));

}

danceHall("50", "25", "2");
