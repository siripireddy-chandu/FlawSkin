
// Function to show/hide the dropdown content
    function toggleDropdown() {
      var dropdown = document.getElementById("myDropdown");
      if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
      } else {
        dropdown.style.display = "none";
      }
    }
    
    // Function to handle the 'Hello' button click
    function COD() {
      alert("Hello!");
    }
    
    // Function to handle the 'Hi' button click
    function UPI() {
      alert("Hi!");
    }
    
    // Close the dropdown if the user clicks outside of it
    document.addEventListener("click", function(event) {
      var dropdown = document.getElementById("myDropdown");
      var dropbtn = document.querySelector(".dropbtn");
      if (!dropbtn.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = "none";
      }
    });
    
  
