const images = [
    "image/img.jpg",
    "image/harry.jpg",
    "image/naruto2.jpg",
    "image/naruto3.jpg",
    "image/naruto4.jpg"
  ];
  
  let currentIndex = 0;
  
  const slider = document.getElementById("slider");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  
  function updateImage() {
    slider.src = images[currentIndex];
  }
  
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });
  
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });
  
  updateImage();
  