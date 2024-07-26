function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
    // Save the current state to localStorage
    if (element.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
}

// Check for saved dark mode preference when the page loads
document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }
});