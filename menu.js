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
document.getElementById('trailSessionBtn').addEventListener('click', function() {
  window.location.href = 'Trailsession.html';
});
document.getElementById('full-body').addEventListener('click', function() {
  window.location.href = 'fulll body.html';
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


// var acc = document.getElementsByClassName("accordion");
//     var i;
    
//     for (i = 0; i < acc.length; i++) {
//         acc[i].addEventListener("click", function () {
//             this.classList.toggle("active");
//             var panel = this.nextElementSibling;
//             if (panel.style.maxHeight) {
//                 panel.style.maxHeight = null;
//             } else {
//                 panel.style.maxHeight = panel.scrollHeight + "px";
//             }
//         });
//     }


// faq

// one time trail session code it is not working
document.addEventListener("DOMContentLoaded", function() {
  var trailSessionBtn = document.getElementById("cash1");

  // Check if the user has already completed the trail session
  if (hasCompletedTrailSession()) {
      disableTrailSessionButton();
  }

  // Add click event listener to the button
  trailSessionBtn.addEventListener("click", function() {
      // Check if the user has already completed the trail session
      if (!hasCompletedTrailSession()) {
          // Set the cookie to mark the trail session as completed (valid for 1 year)
          setCookie("trailSessionCompleted", "true", 365);
          // Disable the button after booking
          disableTrailSessionButton();
          // Optionally, redirect to the trail session page (change 'trail-session.html' to your actual page name)
          // window.location.href = "trail-session.html";
          alert("Trail session booked successfully!");
      } else {
          // Display popup message if trail session already completed
          alert("Sorry, your trail session has already been completed.");
      }
  });
});

// Function to check if the trail session has been completed
function hasCompletedTrailSession() {
  var trailSessionCookie = getCookie("trailSessionCompleted");
  return trailSessionCookie === "true";
}

// Function to set a cookie
function setCookie(cookieName, cookieValue, expiryDays) {
  var d = new Date();
  d.setTime(d.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

// Function to get a cookie value
function getCookie(cookieName) {
  var name = cookieName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(';');
  for (var i = 0; i < cookieArray.length; i++) {
      var cookie = cookieArray[i].trim();
      if (cookie.indexOf(name) == 0) {
          return cookie.substring(name.length, cookie.length);
      }
  }
  return "";
}

// Function to disable the trail session button
function disableTrailSessionButton() {
  var trailSessionBtn = document.getElementById("trailSessionBtn");
  trailSessionBtn.disabled = true;
  // Optionally, change the button style to indicate it's disabled
  trailSessionBtn.style.opacity = 0.5; // Example: reduce opacity
}

