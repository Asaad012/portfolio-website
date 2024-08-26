const toggle = document.getElementById("toggle-mode");
const navbarItems = document.querySelectorAll("nav ul li a");

toggle.textContent="☾";
document.body.dataset.mode = "light";


// Add event listeners to each navbar item
navbarItems.forEach((item) => {
  console.log(item);
  item.addEventListener("click", (event) => {
    document.getElementById("home").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("about").style.display = "none";

    navbarItems.forEach(item => {item.classList.remove("active")});
    switch (item.textContent) {
      case "Home":
        document.getElementById("home").style.display = "block";
        item.classList.add("active");
        break;
      case "Projects":
        document.getElementById("projects").style.display = "block";
        item.classList.add("active");
        break;
      case "About":
        document.getElementById("about").style.display = "block";
        item.classList.add("active");
        break;
    }
  });
});

toggle.addEventListener("click", function () {
  if (document.body.dataset.mode === "light") {
    document.body.style.backgroundColor = "hsl(0, 0%, 15%)";
    document.body.style.color = "white";
    toggle.textContent = "☀";
    document.body.dataset.mode = "dark";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    toggle.textContent = "☾";
    document.body.dataset.mode = "light";
  }
});
