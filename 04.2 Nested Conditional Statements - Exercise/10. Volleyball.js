function volleyball(yearType, holidays, home) {
    
    holidays = Number(holidays);
    home = Number(home);

    let weekendsInSofia = 48 - home;
    let saturdayGames = weekendsInSofia * (3.0 / 4);
    let holidayGames = holidays * (2.0 / 3);

    let totalGames = saturdayGames + holidayGames + home;

    if (yearType == "leap") {
        totalGames += totalGames * 0.15;
    }
    console.log(Math.floor(totalGames));
}

volleyball("leap", "5", "2");
