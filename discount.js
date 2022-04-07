

function calculatePriceWithDiscount(price, discount){
    const percentajeDiscountPrice = 100 - discount;
    const priceDiscount = price * percentajeDiscountPrice/100;
    return priceDiscount;
}

function calculatePriceDiscount(){
    const inputPrice = document.getElementById("price");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("discount");
    const discountValue = inputDiscount.value;

    const inputCupon = document.getElementById("cupon");
    const cuponValue = inputCupon.value;

    const totalDiscount =  Number(discountValue) + Number(cuponValue);
    console.log(totalDiscount);

    const price = calculatePriceWithDiscount(priceValue,totalDiscount);
    const result = document.getElementById("resultP");
    result.innerText = `The price with discount is ${price}`;
}

// console.log({
//     price,
//     discount,
//     percentajeDiscountPrice,
//     priceDiscount,
// });