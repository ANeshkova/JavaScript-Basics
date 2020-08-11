function metricConverter(number, input, output) {

    number = Number(number);

    if (input == "m") {
        if (output == "cm") {
            number = number * 100;

        } else if (output == "mm") {
            number = number * 1000;
        }
    } else if (input == "cm") {
        if (output == "m") {
            number = number / 100;

        } else if (output == "mm") {
            number = number * 10;
        }
    } else if (input == "mm") {
        if (output == "cm") {
            number = number / 10;

        } else if (output == "m") {
            number = number / 1000;
        }
    }
    console.log(number.toFixed(3));
}

metricConverter("45", "cm", "mm");
