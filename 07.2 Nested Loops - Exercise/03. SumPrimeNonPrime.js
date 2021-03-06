function sumPrimeNonPrime(input) {

    let text = input.shift();

    let prime = 0;
    let nonprime = 0;

    while (text != "stop") {

        let isPrime = true;

        let num = Number(text);

        if (num < 0) {
            console.log("Number is negative.");
        } else if (num >= 2) {
            for (let i = 2; i <= num / 2; i++) {
                if (num % i == 0) {
                    nonprime += num;
                    isPrime = false;
                    break;
                }                    
            }
            if (isPrime == true) {
                prime += num;
            }
            
        } else {
            nonprime += num;
        }
        text = input.shift();
    }

    console.log(`Sum of all prime numbers is: ${prime}`);
    console.log(`Sum of all non prime numbers is: ${nonprime}`);
}

sumPrimeNonPrime([
"3",
"9",
"0",
"7",
"19",
"4",
"stop"
]);
