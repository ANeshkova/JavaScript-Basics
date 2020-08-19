function hotelRoom(month, nights) {

    nights = Number(nights);

    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {
        case "May":
        case "October":
            studioPrice = nights * 50;
            apartmentPrice = nights * 65;

            if (nights > 7 && nights <= 14) {
                studioPrice -= studioPrice * 0.05;
            } else if (nights > 14) {
                studioPrice -= studioPrice * 0.30;
                apartmentPrice -= apartmentPrice * 0.10;
            }
            break;
        case "June":
        case "September":
            studioPrice = nights * 75.20;
            apartmentPrice = nights * 68.70;

            if (nights > 14) {
                studioPrice -= studioPrice * 0.20;
                apartmentPrice -= apartmentPrice * 0.10;
            }
            break;
        case "July":
        case "August":
            studioPrice = nights * 76;
            apartmentPrice = nights * 77;

            if (nights > 14) {
                apartmentPrice -= apartmentPrice * 0.10;
            }
            break;
    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

hotelRoom("May", "15");
