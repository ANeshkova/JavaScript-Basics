function yardGreening(input) {

    let price = Number(input) * 7.61;
    let discount = price * 0.18;

    let totalPrice = price - discount;

    console.log(`The final price is: ${totalPrice.toFixed(2)} lv.`);
    console.log(`The discount is: ${discount.toFixed(2)} lv.`);
}

yardGreening("540");