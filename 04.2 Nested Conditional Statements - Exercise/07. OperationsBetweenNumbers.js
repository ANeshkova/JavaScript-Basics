function operationsBetweenNumbers(num1, num2, sign) {

    num1 = Number(num1);
    num2 = Number(num2);

    let sum = 0;
    let type;

    if (sign == '+' || sign == '-' || sign == '*') {
        if (sign == '+') {
            sum = num1 + num2;
            if (sum % 2 == 0) {
                type = "even";
            } else {
                type = "odd";
            }
        } else if (sign == '-') {
            sum = num1 - num2;
            if (sum % 2 == 0) {
                type = "even";
            } else {
                type = "odd";
            }
        } else {
            sum = num1 * num2;
            if (sum % 2 == 0) {
                type = "even";
            } else {
                type = "odd";
            }
        }

        console.log(`${num1} ${sign} ${num2} = ${sum} - ${type}`);

    } else if (sign == '/') {
        if (num2 == 0) {
            console.log(`Cannot divide ${num1} by zero`);

        } else {
            sum = num1 / num2;
            console.log(`${num1} ${sign} ${num2} = ${sum.toFixed(2)}`);
        }
    } else {
        if (num2 == 0) {
            console.log(`Cannot divide ${num1} by zero`);

        } else {
            sum = num1 % num2;
            console.log(`${num1} ${sign} ${num2} = ${sum}`);
        }
    }
}

operationsBetweenNumbers('10', '12', '+');
//operationsBetweenNumbers('112', '0', '/');

