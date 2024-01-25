$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    // autoplayTimeout: 2520,
    // smartSpeed: 1500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

// ==================================

flatpickr("#datetimeStart", {
    noCalendar: false,
    minDate: "today",
    dateFormat: "d/m/Y",
});

flatpickr("#datetimeEnd", {
    noCalendar: false,
    minDate: "today",
    dateFormat: "d/m/Y",
});

// ----------------- toggle language ----------------------

function toggleDropdown() {
    var dropdown = document.querySelector('.language-switcher');
    dropdown.classList.toggle('active');
}

function changeLanguage(flag, language) {

    document.getElementById("currentLanguage").innerHTML = `<span class="flag-icon flag-icon-${flag}"></span> ${language}
    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="none" viewBox="0 0 16 16"
        class="DateInput_icon seo-pages-1o6k71p" role="img" version="1.1">
        <path fill="#121214" fill-rule="evenodd"
        d="M14 5.614a.75.75 0 0 1-.245.555l-5.25 4.773a.754.754 0 0 1-1.01 0l-5.25-4.773a.75.75 0 0 1 1.01-1.11L8 9.373l4.745-4.314A.75.75 0 0 1 14 5.614Z"
        clip-rule="evenodd"></path>
    </svg>
    `;

    toggleDropdown();
}



// ==============================


// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });


//   ==============================================

function closeLoginModel() {
    document.getElementById("register").style.display='none'
    document.body.style.overflow ='auto';

}

function openlogin() {
    console.log("dddddd");

    document.getElementById("register").style.display='block'
}

