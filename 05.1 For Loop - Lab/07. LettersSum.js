function lettersSum(text, number, budget) {

    number = Number(number);
    budget = Number(budget);

    let sum = 0;

    for (let i = 0; i < text.length; i++) {

        switch (text[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'y':

                sum += 3;
                break;
            default:
                sum += 1;
                break;
        }
    }

    let totalSum = sum * number;

    if (budget < totalSum) {
        console.log(`Cannot buy ${text}. Product value: ${totalSum.toFixed(2)}`);
        
    } else {
        console.log(`${text} bought. Money left: ${(budget - totalSum).toFixed(2)}`);
    }
}

lettersSum("apple", "2", "20")
