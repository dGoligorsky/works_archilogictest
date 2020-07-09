const exploreButton = document.getElementById("threeDButton");
exploreButton.innerHTML = "Explore 3D";

const renderedImageTag = document.getElementById("renderedImage");
const threeDViewTag = document.getElementById("threeDView");

exploreButton.addEventListener("click", (e) => {
  if (e.target.innerHTML === "Explore 3D") {
    exploreButton.innerHTML = "See Photos";
    renderedImageTag.classList.add("hide");
    threeDViewTag.classList.remove("hide");
  } else {
    exploreButton.innerHTML = "Explore 3D";
    renderedImageTag.classList.remove("hide");
    threeDViewTag.classList.add("hide");
  }
});
