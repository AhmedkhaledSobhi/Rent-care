


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


// ===================================

    var popup = document.getElementById('myPopup');
    var popupButton = document.getElementById('popupButton');
    var body = document.body;
    var originalOverflow = body.style.overflow;

    popupButton.onclick = function (event) {
    event.stopPropagation();
    popup.style.display = 'block';
    body.style.overflow = 'hidden';
    };

    window.onclick = function (event) {
    popup.style.display = 'none';
    body.style.overflow = originalOverflow;

    };

    function stopPropagation(event) {
    event.stopPropagation();
    }

    // Close the popup when clicking the button inside the popup
    function closePopup() {
    popup.style.display = 'none';
    body.style.overflow = originalOverflow; // Restore the original scroll
    }


const rangeAllYear = document.querySelectorAll(".range-input-year input");
const NumberTheYear = document.querySelectorAll(".year-input .field-year , .year-input .field-year");
const progressYear = document.querySelector(".slider-Year .progress-year");

rangeAllYear.forEach(input => {
    input.addEventListener('input', e => {
        let minVal = parseInt(rangeAllYear[0].value);
        let maxVal = parseInt(rangeAllYear[1].value);

        NumberTheYear[0].innerHTML = minVal;
        NumberTheYear[1].innerHTML = maxVal;

        progressYear.style.left = ((minVal - 1950) / (2025 - 1950)) * 100 + "%";
        progressYear.style.right = ((2025 - maxVal) / (2025 - 1950)) * 100 + "%";
    });
});




// =============================================


function toggleFeatures() {
    var description = document.querySelector('.more-features');
    var button = document.getElementById('featuresMore');

    description.classList.toggle('show');
    var isExpanded = description.classList.contains('show');

    button.innerHTML = isExpanded ? ' <i class="fa-solid fa-minus"></i> Show Less' : ' <i class="fa-solid fa-plus"></i>  Show More';
    // innerText
}


// ==================================================

// const scopeValue = document.getElementById('scopeValue');
// const scopeSlider = document.getElementById('scopeSlider');

// scopeSlider.step = 50;

// scopeValue.addEventListener('input', () => {
//   scopeSlider.value = scopeValue.innerHTML;
// });

// scopeSlider.addEventListener('input', () => {
//   scopeValue.innerHTML = scopeSlider.value;
// });
  
const scopeValue = document.getElementById('scopeValue');
    const scopeSlider = document.getElementById('scopeSlider');

    // Set the step attribute of the slider to 50
    scopeSlider.step = 50;

    // Update the value displayed in the #scopeValue element when sliding
    scopeSlider.addEventListener('input', () => {
      scopeValue.innerHTML = `${scopeSlider.value} <span>mi/day and more</span>`;
    });
