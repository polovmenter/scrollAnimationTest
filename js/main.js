const scrollItems = document.querySelectorAll(".scroll-item")

const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return elementTop <= (window.innerHeight || document.documentElement.clientHeight)
}

const displayScrollElement = (el) => {
    el.classList.add("active")
}

const hideScrollElemet = (el) => {
    el.classList.remove("active")
}

const handleScrollAnimation = () => {
    scrollItems.forEach((el) => {
        if (elementInView(el)) {
            displayScrollElement(el)
        }
        else {
            hideScrollElemet(el)
        }
    })
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
})