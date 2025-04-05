const imageElements = document.querySelectorAll(".project-gif img");
const imageTgt = document.getElementById("project-pics");

let imgSrc = [];
imageElements.forEach((img) => {
  const imageSrc = img.getAttribute("src");
  imgSrc.push(imageSrc);
});

let i = 0;

function changeImage() {
  setTimeout(() => {
    imageTgt.src = imgSrc[i];
    i++;

    if (i === imgSrc.length) {
      i = 0;
    }
    changeImage();
  }, 3000);
}

changeImage();

const options = {
  root: null,
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, options);

document.querySelectorAll(".project").forEach((project) => {
  observer.observe(project);
});

document.getElementById("resume").addEventListener("click", function () {
  window.open("/dummy assets/rules.pdf", "_blank");
});
