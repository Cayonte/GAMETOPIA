const carousel = document.querySelector(".carousel")
const ArrwBtn = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
// const carouselChildrens = [...carousel.children];

// let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
//     carousel.insertAdjacentHTML("afterbegin", card.outerHTML)
// })

// carouselChildrens.slice(0, cardPerView).forEach(card => {
//     carousel.insertAdjacentHTML("beforeend", card.outerHTML)
// })

ArrwBtn.forEach(btn =>{
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })

    
});




let isDragging = false;

const dragStart = () =>{
    isDragging = true;
}


const dragging = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = e.pageX;
}

// carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("mousemove", dragging)