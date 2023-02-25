const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentSlide = 1;

const distancesToMove = [0, -49, -94, -154, -214, -280, -338, -421, -500];

function moveToSlide(slideIndex) {
  // Set the left margin of the slider to move it to the requested slide
  slider.style.marginLeft = `${distancesToMove[slideIndex - 1]}%`;

  // Update the current slide
  currentSlide = slideIndex;

  // Show/hide the text based on the current slide
  if (currentSlide === 1) {
    document.getElementById("slide1_text").style.visibility = "visible";
    document.getElementById("slide2_text").style.visibility = "hidden";
    document.getElementById("slide3_text").style.visibility = "hidden";
    document.getElementById("slide4_text").style.visibility = "hidden";
    document.getElementById("slide5_text").style.visibility = "hidden";
    document.getElementById("slide6_text").style.visibility = "hidden";
    document.getElementById("slide7_text").style.visibility = "hidden";
    document.getElementById("slide8_text").style.visibility = "hidden";
    document.getElementById("slide9_text").style.visibility = "hidden";
  } else if (currentSlide === 2) {
    document.getElementById("slide1_text").style.visibility = "hidden";
    document.getElementById("slide2_text").style.visibility = "visible";
    document.getElementById("slide3_text").style.visibility = "hidden";
    document.getElementById("slide4_text").style.visibility = "hidden";
    document.getElementById("slide5_text").style.visibility = "hidden";
    document.getElementById("slide6_text").style.visibility = "hidden";
    document.getElementById("slide7_text").style.visibility = "hidden";
    document.getElementById("slide8_text").style.visibility = "hidden";
    document.getElementById("slide9_text").style.visibility = "hidden";
  } else if (currentSlide === 3) {
    document.getElementById("slide1_text").style.visibility = "hidden";
    document.getElementById("slide2_text").style.visibility = "hidden";
    document.getElementById("slide3_text").style.visibility = "visible";
    document.getElementById("slide4_text").style.visibility = "hidden";
    document.getElementById("slide5_text").style.visibility = "hidden";
    document.getElementById("slide6_text").style.visibility = "hidden";
    document.getElementById("slide7_text").style.visibility = "hidden";
    document.getElementById("slide8_text").style.visibility = "hidden";
    document.getElementById("slide9_text").style.visibility = "hidden";
  } else if (currentSlide === 4) {
    document.getElementById("slide1_text").style.visibility = "hidden";
    document.getElementById("slide2_text").style.visibility = "hidden";
    document.getElementById("slide3_text").style.visibility = "hidden";
    document.getElementById("slide4_text").style.visibility = "visible";
    document.getElementById("slide5_text").style.visibility = "hidden";
    document.getElementById("slide6_text").style.visibility = "hidden";
    document.getElementById("slide7_text").style.visibility = "hidden";
    document.getElementById("slide8_text").style.visibility = "hidden";
    document.getElementById("slide9_text").style.visibility = "hidden";
  } else if (currentSlide === 5) {
    document.getElementById("slide1_text").style.visibility = "hidden";
    document.getElementById("slide2_text").style.visibility = "hidden";
    document.getElementById("slide3_text").style.visibility = "hidden";
    document.getElementById("slide4_text").style.visibility = "hidden";
    document.getElementById("slide5_text").style.visibility = "visible";
    document.getElementById("slide6_text").style.visibility = "hidden";
    document.getElementById("slide7_text").style.visibility = "hidden";
    document.getElementById("slide8_text").style.visibility = "hidden";
    document.getElementById("slide9_text").style.visibility = "hidden";
  } else if (currentSlide === 6) {
    document.getElementById("slide1_text").style.visibility = "hidden";
    document.getElementById("slide2_text").style.visibility = "hidden";
    document.getElementById("slide3_text").style.visibility = "hidden";
    document.getElementById("slide4_text").style.visibility = "hidden";
    document.getElementById("slide5_text").style.visibility = "hidden";
    document.getElementById("slide6_text").style.visibility = "visible";
    document.getElementById("slide7_text").style.visibility = "hidden";
    document.getElementById("slide8_text").style.visibility = "hidden";
    document.getElementById("slide9_text").style.visibility = "hidden";
  } else if (currentSlide === 7) {
    document.getElementById("slide1_text").style.visibility = "hidden";
    document.getElementById("slide2_text").style.visibility = "hidden";
    document.getElementById("slide3_text").style.visibility = "hidden";
    document.getElementById("slide4_text").style.visibility = "hidden";
    document.getElementById("slide5_text").style.visibility = "hidden";
    document.getElementById("slide6_text").style.visibility = "hidden";
    document.getElementById("slide7_text").style.visibility = "visible";
    document.getElementById("slide8_text").style.visibility = "hidden";
    document.getElementById("slide9_text").style.visibility = "hidden";
  } else if (currentSlide === 8) {
    document.getElementById("slide1_text").style.visibility = "hidden";
    document.getElementById("slide2_text").style.visibility = "hidden";
    document.getElementById("slide3_text").style.visibility = "hidden";
    document.getElementById("slide4_text").style.visibility = "hidden";
    document.getElementById("slide5_text").style.visibility = "hidden";
    document.getElementById("slide6_text").style.visibility = "hidden";
    document.getElementById("slide7_text").style.visibility = "hidden";
    document.getElementById("slide8_text").style.visibility = "visible";
    document.getElementById("slide9_text").style.visibility = "hidden";
  } else if (currentSlide === 9) {
    document.getElementById("slide1_text").style.visibility = "hidden";
    document.getElementById("slide2_text").style.visibility = "hidden";
    document.getElementById("slide3_text").style.visibility = "hidden";
    document.getElementById("slide4_text").style.visibility = "hidden";
    document.getElementById("slide5_text").style.visibility = "hidden";
    document.getElementById("slide6_text").style.visibility = "hidden";
    document.getElementById("slide7_text").style.visibility = "hidden";
    document.getElementById("slide8_text").style.visibility = "hidden";
    document.getElementById("slide9_text").style.visibility = "visible";
  }
  // Update the button states based on the current slide
  updateButtonStates();
}

function updateButtonStates() {
  // Disable the previous button on the first slide
  prevBtn.disabled = currentSlide === 1;

  // Disable the next button on the last slide
  nextBtn.disabled = currentSlide === slides.length;

  // Remove the "active" class from all buttons
  document.querySelectorAll(".controls button").forEach((button) => {
    button.classList.remove("active");
  });

  // Add the "active" class to the current button
  document
    .querySelector(`.controls button:nth-child(${currentSlide})`)
    .classList.add("active");
}

// Add event listeners to the "Next" and "Previous" buttons
prevBtn.addEventListener("click", () => {
  moveToSlide(currentSlide - 1);
});

nextBtn.addEventListener("click", () => {
  moveToSlide(currentSlide + 1);
});

window.addEventListener("load", function () {
  setTimeout(function () {
    var loader = document.querySelector(".loader");
    var mainContent = document.querySelector(".main-content");

    loader.style.display = "none";
    mainContent.style.display = "block";
  }, 2000);
});

$(document).ready(function () {
  // Get the slide and pagination elements
  const $slides = $(".slides");
  const $pagination = $(".pagination");
  const $pages = $pagination.find(".pagination-button");

  // Get the number of slides and set the initial active slide and pagination button
  const numSlides = $slides.children().length;
  let activeSlide = 1;
  $pages.eq(activeSlide - 1).addClass("active");

  // Add event listeners for previous/next buttons
  $(".prev").click(function () {
    if (activeSlide > 1) {
      activeSlide--;
      updateActiveSlide();
    }
  });
  $(".next").click(function () {
    if (activeSlide < numSlides) {
      activeSlide++;
      updateActiveSlide();
    }
  });

  // Function to update the active slide and pagination button
  function updateActiveSlide() {
    // Remove active class from all pages
    $pages.removeClass("active");
    // Add active class to the current page
    $pages.eq(activeSlide - 1).addClass("active");
    // Animate the slide transition
    $slides.animate({ left: -(activeSlide - 1) * 100 + "%" });
  }

  // Add event listeners for pagination buttons
  $pages.click(function () {
    activeSlide = $(this).index() + 1;
    updateActiveSlide();
  });
});
