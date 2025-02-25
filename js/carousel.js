document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel-slides img");
    let currentIndex = 0;
    let interval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function moveSlide(direction) {
        currentIndex += direction;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }
        showSlide(currentIndex);
        resetAutoSlide();
    }

    function autoSlide() {
        moveSlide(1);
    }

    function resetAutoSlide() {
        clearInterval(interval);
        interval = setInterval(autoSlide, 3000);
    }

    // Inicializar el carrusel
    showSlide(currentIndex);
    interval = setInterval(autoSlide, 3000);

    // Botones de navegación manual
    document.querySelector(".prev").addEventListener("click", () => moveSlide(-1));
    document.querySelector(".next").addEventListener("click", () => moveSlide(1));
});
