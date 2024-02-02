

function toggleDescription() {
    var description = document.querySelector('.description-content-more');
    var button = document.getElementById('descriptionMore');

    description.classList.toggle('show');
    var isExpanded = description.classList.contains('show');

    button.innerText = isExpanded ? 'Less' : 'More';
}


function toggleFeatures() {
    var description = document.querySelector('.more-features');
    var button = document.getElementById('featuresMore');

    description.classList.toggle('show');
    var isExpanded = description.classList.contains('show');

    button.innerText = isExpanded ? 'Less' : 'More';
}

function toggleGuidelines() {
    var description = document.querySelector('.more-guidelines');
    var button = document.getElementById('guidelinesMore');

    description.classList.toggle('show');
    var isExpanded = description.classList.contains('show');

    button.innerText = isExpanded ? 'Less' : 'More'; 
}

function toggleReviews() {
    var description = document.querySelector('.more-reviews');
    var button = document.getElementById('reviewsMore');

    description.classList.toggle('show');
    var isExpanded = description.classList.contains('show');

    button.innerText = isExpanded ? 'Less' : 'See More'; 
}

// ==========================

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

 
