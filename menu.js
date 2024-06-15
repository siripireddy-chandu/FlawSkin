const imageScroller = document.querySelector('.image-scroller');

let scrollPosition = 0;

function scrollImages() {
  scrollPosition++; // Increment scroll position

  // Adjust these values to control scroll speed and image container width
  imageScroller.scrollLeft = scrollPosition * 300; // Example scroll amount per iteration

  if (scrollPosition * 300 >= imageScroller.scrollWidth) {
    scrollPosition = 0; // Reset scroll position when reaching the end
  }

  requestAnimationFrame(scrollImages);
}

requestAnimationFrame(scrollImages);
/* General styles */
document.getElementById('face-service').addEventListener('click', function() {
  window.location.href = 'face.html';
});
  document.getElementById('underarms-service').addEventListener('click', function() {
  window.location.href = 'underarms.html';
});
document.getElementById('hands-service').addEventListener('click', function() {
  window.location.href = 'hands.html';
});
document.getElementById('legs-service').addEventListener('click', function() {
  window.location.href = 'legs.html';
});
document.getElementById('back-service').addEventListener('click', function() {
  window.location.href = 'back.html';
});
document.getElementById('bikini-service').addEventListener('click', function() {
  window.location.href = 'bikini.html';
});
document.getElementById('chest-abdomen-service').addEventListener('click', function() {
  window.location.href = 'chest&abdomin.html';
});
document.getElementById('buttocks-service').addEventListener('click', function() {
  window.location.href = 'buttocks.html';
});
document.getElementById('packages-service').addEventListener('click', function() {
  window.location.href = 'packages.html';
});
document.getElementById('Trail-session').addEventListener('click', function() {
  window.location.href = 'Trailsession.html';
});

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const serviceButtons = document.querySelectorAll('.service-buttons button'); // Get all service buttons

searchBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default form submission behavior

  const searchTerm = searchInput.value.toLowerCase(); // Get search term and convert to lowercase

  // Filter and display services based on search term
  serviceButtons.forEach(button => {
    const buttonText = button.textContent.toLowerCase();
    if (searchTerm) { // Check if search term is empty
      if (buttonText.includes(searchTerm)) {
        button.style.display = 'block'; // Show matching buttons
      } else {
        button.style.display = 'none'; // Hide non-matching buttons
      }
    } else {
      // No search term, display all services
      button.style.display = 'block'; // Show all buttons
    }
  });

  // Clear search input after filtering (optional)
  // searchInput.value = '';
});
var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }