/**
 * 
 * @param {string} carouselType 
 */


const carouselV2 = (carouselType) => {
    const slides$$ = document.querySelectorAll(`.slider__slide--${carouselType}`);
    const images$$ = document.querySelectorAll(`.carouselV2__asset--${carouselType}`);
}

// Aplicamos el manejo de slides actualizando las clases

slides$$.forEach((slide, index) => 
slide.addEventListener("click", () => {
    if (carouselType === "models") {
        slides$$.forEach((slide) => slide.classList.remove("isSlideActive"));
        image$$.forEach((image) => image.classList.add("inactive"));

        if (index >= 0) {
            slides$$[index].classList.add("isSlideActive");
            images$$[index].classList.remove("inactive");
        }
    }
})
)

carouselV2("models");

buttonShowcase1$$.addEventListener("click", () => {
});

buttonShowcase2$$.addEventListener("click", () => {
});

