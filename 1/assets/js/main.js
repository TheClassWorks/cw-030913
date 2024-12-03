let sliderData = [
  { id: 0, src: "assets/img/header-1.jpg" },
  { id: 1, src: "assets/img/header-2.jpg" },
  { id: 2, src: "assets/img/header-3.jpg" },
  { id: 3, src: "assets/img/header-4.jpg" },
];

let ax = document.querySelector(".slider-img");
let nextBtn = document.querySelector(".slider-forward-btn");
let prevBtn = document.querySelector(".slider-back-btn");

// console.log(sliderData[2].src);

let imageIndex = 0;

nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);
let slideShow = setInterval(nextImage, 3000);

function nextImage() {
  imageIndex++;
  if (imageIndex == sliderData.length) imageIndex = 0;
  ax.setAttribute("src", sliderData[imageIndex].src);
  clearInterval(slideShow);
  slideShow = setInterval(nextImage, 3000);
}
function prevImage() {
  imageIndex--;
  if (imageIndex == -1) imageIndex = sliderData.length - 1;
  ax.setAttribute("src", sliderData[imageIndex].src);
  clearInterval(slideShow);
  slideShow = setInterval(nextImage, 3000);
}