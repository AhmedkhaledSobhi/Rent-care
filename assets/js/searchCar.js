


const rangeInputs = document.querySelectorAll(".range-input input"),
priceInputs = document.querySelectorAll(".price-input .field div"),
progress = document.querySelector(".slider .progress");

rangeInputs.forEach(input => {
input.addEventListener('input', e => {
    let minVal = parseInt(rangeInputs[0].value),
        maxVal = parseInt(rangeInputs[1].value);

    priceInputs[0].textContent = minVal;
    priceInputs[1].textContent = maxVal;

    progress.style.left = ((minVal - 10) / 240) * 100 + "%";
    progress.style.right = ((250 - maxVal) / 240) * 100 + "%";
});
});