// FILTER
function filterItems(category){
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if(category === "all"){
      card.classList.remove("hide");
    } else {
      card.dataset.category === category
        ? card.classList.remove("hide")
        : card.classList.add("hide");
    }
  });
}

// DEFAULT LOAD
filterItems("all");

// SMOOTH SCROLL
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});