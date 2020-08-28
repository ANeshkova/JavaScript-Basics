function cinemaTickets(input) {

    let film = input.shift();
    let seats = Number(input.shift());

    let allStudent = 0;
    let allStandard = 0;
    let allKid = 0;
    let allCount = 0;

    while (film != "Finish") {

        let count = 0;

        while (count < seats) {
            let ticketType = input.shift();
            if (ticketType == "student") {
                allStudent++;

            } else if (ticketType == "standard") {
                allStandard++;

            } else if (ticketType == "kid") {
                allKid++;
                
            } else if (ticketType == "End") {
                break;
            }
            count++;
            allCount++;
        }
        let percent = (count) / seats * 100;
        console.log(`${film} - ${percent.toFixed(2)}% full.`);

        film = input.shift();
        seats = Number(input.shift());
    }
	
    console.log(`Total tickets: ${allCount}`);
    console.log(`${(allStudent / allCount * 100).toFixed(2)}% student tickets.`);
    console.log(`${(allStandard / allCount * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(allKid / allCount * 100).toFixed(2)}% kids tickets.`);    
}

cinemaTickets([
    "Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"
]);
