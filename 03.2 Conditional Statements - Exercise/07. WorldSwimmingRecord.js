function worldSwimmingRecord(recordInSeconds, distanceInMeters, secondsFor1Meter) {

    recordInSeconds = Number(recordInSeconds);
    distanceInMeters = Number(distanceInMeters);
    secondsFor1Meter = Number(secondsFor1Meter);

    let time = distanceInMeters * secondsFor1Meter;
    let distance = Math.floor(distanceInMeters / 15);
    let moreSeconds = distance * 12.5;

    let endTime = time + moreSeconds;

    if (endTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${endTime.toFixed(2)} seconds.`);
        
    } else {
        let neededSeconds = endTime - recordInSeconds;
        console.log(`No, he failed! He was ${neededSeconds.toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord("10464", "1500", "20");
