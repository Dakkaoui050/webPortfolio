document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    const contentSections = document.querySelectorAll(".content");
  
    navLinks.forEach(function (link, index) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
  
        // Hide all content sections
        contentSections.forEach(function (section) {
          section.style.display = "none";
        });
  
        // Show the selected content section
        contentSections[index].style.display = "block";
      });
    });
  
    // Initially display the first content section (Home)
    contentSections[0].style.display = "block";
  });
