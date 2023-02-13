document.getElementById('btn-apply').addEventListener("click", () => {
    // caching element values
    const priceAmountValue = parseFloat(document.getElementById('price-amount').value);
    const inputCouponValue = document.getElementById("coupon-input").value;
    const pleasePayField = document.getElementById("priceAmountWithDiscount");

    // validating coupon code
    if (inputCouponValue.includes("DISC")) {
        // discount amount
        const discountAmount = parseFloat(inputCouponValue.slice(4));
        pleasePayField.innerText = `${(discountAmount * priceAmountValue)/100} taka only, Special Note: The discounted price`;
    } else {
        alert("please insert a valid coupon code to get the discount");
        pleasePayField.innerText = "please insert a valid coupon code to get the discount";
        return;
    }

    return true;
});