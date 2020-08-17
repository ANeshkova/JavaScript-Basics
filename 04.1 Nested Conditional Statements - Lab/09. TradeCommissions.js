function tradeCommissions(town, sales) {

    sales = Number(sales);

    let commission = 0;

    if (0 <= sales && sales <= 500) {
        if (town == "Sofia") {
            commission = sales * 0.05;
        } else if (town == "Varna") {
            commission = sales * 0.045;
        } else if (town == "Plovdiv") {
            commission = sales * 0.055;
        }
    } else if (500 < sales && sales <= 1000) {
        if (town == "Sofia") {
            commission = sales * 0.07;
        } else if (town == "Varna") {
            commission = sales * 0.075;
        } else if (town == "Plovdiv") {
            commission = sales * 0.08;
        }
    } else if (1000 < sales && sales <= 10000) {
        if (town == "Sofia") {
            commission = sales * 0.08;
        } else if (town == "Varna") {
            commission = sales * 0.10;
        } else if (town == "Plovdiv") {
            commission = sales * 0.12;
        }
    } else if (sales > 10000) {
        if (town == "Sofia") {
            commission = sales * 0.12;
        } else if (town == "Varna") {
            commission = sales * 0.13;
        } else if (town == "Plovdiv") {
            commission = sales * 0.145;
        }
    }

    if (commission == 0) {
        console.log("error");
    } else {
        console.log(commission.toFixed(2));
    }
}

tradeCommissions("Sofia", "1500");
