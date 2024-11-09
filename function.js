let ticking = false;

function updateParallax() {
    // Select all parallax elements
    const parallaxElements = document.querySelectorAll(".parallax-element");

    if (parallaxElements.length === 0) {
        console.error("No parallax elements found");
        return; // Exit if no elements are found
    }

    // Get the scroll position
    const scrollPosition = window.scrollY;

    parallaxElements.forEach(parallaxElement => {
        // Calculate subtle offset based on scroll position for a gentle parallax effect
        const offsetY = scrollPosition * 0.2; // Adjust multiplier for effect strength

        // Apply the transformation
        parallaxElement.style.transform = `translate(-50%, -50%) translate3d(0, ${offsetY}px, 0)`;
    });
}

// Function to handle scroll event
function onScroll() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateParallax();
            ticking = false; // Reset ticking
        });
        ticking = true; // Prevent multiple calls
    }
}

// Attach to the scroll event
window.addEventListener("scroll", onScroll);




//PHOTO GALLERY TOGGLE
// Select the elements
const photoLine = document.getElementById('photoLine');
const editLine = document.getElementById('editLine');
const photography = document.getElementById('photography');
const editing = document.getElementById('editing');

// Select all toggle buttons
document.querySelectorAll(".toggleMenu").forEach((toggle) => {
    toggle.addEventListener("click", function() {
        // If the clicked toggle is 'PHOTOGRAPHY'
        if (toggle.textContent.trim() === 'PHOTOGRAPHY') {
            // Hide editLine and its content
            editLine.classList.remove('active');
            editLine.classList.add('hidden');
            editing.classList.remove('active');
            editing.classList.add('hidden');

            // Show photoLine and its content
            photoLine.classList.remove('hidden');
            photoLine.classList.add('active');
            photography.classList.remove('hidden');
            photography.classList.add('active');
        } 
        // If the clicked toggle is 'EDITING'
        else if (toggle.textContent.trim() === 'EDITING') {
            // Hide photoLine and its content
            photoLine.classList.remove('active');
            photoLine.classList.add('hidden');
            photography.classList.remove('active');
            photography.classList.add('hidden');

            // Show editLine and its content
            editLine.classList.remove('hidden');
            editLine.classList.add('active');
            editing.classList.remove('hidden');
            editing.classList.add('active');
        }
    });
});


// Checkout button
document.querySelectorAll('.icon1').forEach((toggleButton) => {
    toggleButton.addEventListener('click', function () {
      const iconToggle = document.querySelector('.icon1');
      const iconToggle2 = document.querySelector('.icon2');
      
      console.log(iconToggle);
  
      if (iconToggle.classList.contains('active')) {
        iconToggle.classList.remove('active');
        iconToggle.classList.add('hidden');
        iconToggle2.classList.remove('hidden');
        iconToggle2.classList.add('visible');

        
      } else {
        iconToggle.classList.remove('hidden');
        iconToggle.classList.add('active');
        iconToggle2.classList.remove('visible');
        iconToggle2.classList.add('hidden');
      }
    });
  });

  document.querySelectorAll('.icon3').forEach((toggleButton) => {
    toggleButton.addEventListener('click', function () {
      const iconToggle3 = document.querySelector('.icon3');
      const iconToggle4 = document.querySelector('.icon4');

      if (iconToggle3.classList.contains('active')) {
        iconToggle3.classList.remove('active');
        iconToggle3.classList.add('hidden');
        iconToggle4.classList.remove('hidden');
        iconToggle4.classList.add('visible');


      } else {
        iconToggle3.classList.remove('hidden');
        iconToggle3.classList.add('active');
        iconToggle4.classList.remove('visible');
        iconToggle4.classList.add('hidden');
      }

    });
});
  

document.querySelectorAll('.icon2').forEach((toggleButton) => {
    toggleButton.addEventListener('click', function () {
      const iconToggle = document.querySelector('.icon1');
      const iconToggle2 = document.querySelector('.icon2');
      
      console.log(iconToggle);
  
      if (iconToggle.classList.contains('active')) {
        iconToggle.classList.remove('active');
        iconToggle.classList.add('hidden');
        iconToggle2.classList.remove('hidden');
        iconToggle2.classList.add('visible');

        
      } else {
        iconToggle.classList.remove('hidden');
        iconToggle.classList.add('active');
        iconToggle2.classList.remove('visible');
        iconToggle2.classList.add('hidden');
      }
    });
  });

  document.querySelectorAll('.icon4').forEach((toggleButton) => {
    toggleButton.addEventListener('click', function () {
      const iconToggle3 = document.querySelector('.icon3');
      const iconToggle4 = document.querySelector('.icon4');

      if (iconToggle3.classList.contains('active')) {
        iconToggle3.classList.remove('active');
        iconToggle3.classList.add('hidden');
        iconToggle4.classList.remove('hidden');
        iconToggle4.classList.add('visible');


      } else {
        iconToggle3.classList.remove('hidden');
        iconToggle3.classList.add('active');
        iconToggle4.classList.remove('visible');
        iconToggle4.classList.add('hidden');
      }

    });
});
  





  // Initialize Flatpickr once on page load
  document.addEventListener("DOMContentLoaded", function() {
    const datepickerInput = document.getElementById("datepicker");

    // Initialize Flatpickr
    flatpickr(datepickerInput, {
      dateFormat: "D, M j, Y", // Format like "Sat, Nov 2, 2024"
      defaultDate: null,       // No preselected date
    });

    // Focus on input to open date picker
    datepickerInput.addEventListener("click", () => {
      datepickerInput._flatpickr.open();  // Use the open() method to open the calendar
    });
  });





  
  document.addEventListener("DOMContentLoaded", () => {
    // Select all relevant input elements
    const inputs = document.querySelectorAll("input[type='email'], input[type='text']");

    inputs.forEach(input => {
        const label = input.nextElementSibling; // Get the corresponding label

        // Function to update label class based on input value
        const updateLabel = () => {
            if (input.value) {
                label.classList.add("filled");
            } else {
                label.classList.remove("filled");
            }
        };

        // Check input value on every input event
        input.addEventListener("input", updateLabel);

        // Check if input is pre-filled or focused
        input.addEventListener("focus", updateLabel);

        // The blur event now only removes the filled class if the input is empty
        input.addEventListener("blur", () => {
            // Do not remove the filled class if the input value is present
            // The filled class will only be removed if the input is empty on blur
            if (!input.value) {
                label.classList.remove("filled");
            }
        });

        // Initial check in case the input is pre-filled
        updateLabel();
    });
});


document.getElementById("biggerBtn").addEventListener("click", function(){ 
  const biggerBtn = document.getElementById("biggerBtn");
  const smallerBtn = document.getElementById("smallerBtn");
  const smallerScreen = document.getElementById("smallerScreen");

  if(smallerScreen.classList.contains("hidden")){
    smallerScreen.classList.remove("hidden");
    smallerBtn.classList.add("active");

  }else{
    smallerBtn.classList.remove("active");
    smallerScreen.classList.add("hidden");
  }

});

document.getElementById("smallerBtn").addEventListener("click", function(){
  const biggerBtn = document.getElementById("biggerBtn");
  const smallerBtn = document.getElementById("smallerBtn");
  const smallerScreen = document.getElementById("smallerScreen");

  if(biggerBtn.classList.contains("active")){
    biggerBtn.classList.add("hidden");
    smallerBtn.classList.add("active");

  }else{
    smallerBtn.classList.remove("active");
    smallerScreen.classList.add("hidden");
  }
});