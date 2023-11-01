// Add an event listener to each navigation link
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault(); // Prevent the default link behavior

    const pageId = this.getAttribute("href"); // Get the target page ID

    // Hide all divs inside the main element
    document.querySelectorAll("main > div").forEach(div => {
      div.style.display = "none";
    });

    // Show the target page
    document.querySelector(pageId).style.display = "block";
  });
});
