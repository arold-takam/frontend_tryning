export class Card {

    #location
    #distance
    #period
    #price
    #ranking
    #isGuestFavorite
    #isLiked
    #images
    #currentIndex

    #cardElement
    #btnPrevious
    #btnNext
    #cardCarouselItems
    #carouselIndicator
    #dots
    #guessFavoriteElement
    #heartElement
    #likedElement
    #locationElement
    #distanceElement
    #periodElement
    #priceElement
    #rankingElement

    constructor(cardData) {
        this.#location = cardData.location;
        this.#distance = cardData.distance;
        this.#period = cardData.period;
        this.#price = cardData.price;
        this.#ranking = cardData.ranking;
        this.#isGuestFavorite = cardData.isGuessFavorite;
        this.#isLiked = cardData.isLiked;
        this.#images = cardData.images;
        this.#currentIndex = 0
        this.#cardElement = document.getElementById("card-template").content.cloneNode(true)
        this.#setNavigation();
        this.#setCarousel();
        this.#setContent();
    }

    get cardElement() {
        return this.#cardElement;
    }

    #setContent() {
        this.#guessFavoriteElement = this.#cardElement.querySelector(".overlay-top-left")
        this.#heartElement = this.#cardElement.querySelector(".fas.fa-heart")
        this.#likedElement = this.#cardElement.querySelector(".overlay-top-right")
        this.#locationElement = this.#cardElement.querySelector(".card-info-location strong")
        this.#distanceElement = this.#cardElement.querySelector(".card-info-distance")
        this.#periodElement = this.#cardElement.querySelector(".card-info-period")
        this.#priceElement = this.#cardElement.querySelector(".card-info-price strong")
        this.#rankingElement = this.#cardElement.querySelector(".card-info-ranking span")

        this.#isGuestFavorite ?
            this.#guessFavoriteElement.style.visibility = "visible" :
            this.#guessFavoriteElement.style.visibility = "hidden"
        this.#isLiked ?
            this.#heartElement.classList.add("liked") :
            this.#heartElement.classList.remove("liked")
        this.#likedElement.addEventListener("click", _ => {
            this.#heartElement.classList.toggle("liked")
        });
        this.#locationElement.innerText = this.#location
        this.#distanceElement.innerText = this.#distance
        this.#periodElement.innerText = this.#period
        this.#priceElement.innerText = this.#price
        this.#rankingElement.innerText = this.#ranking
    }

    #setCarousel() {
        this.#cardCarouselItems = this.#cardElement.querySelector(".card-carousel-items")
        this.#carouselIndicator = this.#cardElement.querySelector(".overlay-carousel-indicator")
        this.#images.forEach((image, index, _) => {
            this.#addImage(image.url, image.description);
            this.#addDot(index)
        })
        this.#dots = this.#cardElement.querySelectorAll(".dot")
    }

    #setNavigation() {
        this.#btnPrevious = this.#cardElement.querySelector(".btn-previous")
        this.#btnNext = this.#cardElement.querySelector(".btn-next")
        this.#btnNext.addEventListener("click", _ => {
            this.#goToImage(++this.#currentIndex)
            this.#controlNavigationButtons();
        })
        this.#btnPrevious.addEventListener("click", _ => {
            this.#goToImage(--this.#currentIndex)
            this.#controlNavigationButtons()
        })
    }

    #addImage(imageURL, imageDescription) {
        const cardImage = document.getElementById("card-image-template").content.cloneNode(true)
        const image = cardImage.querySelector("img")
        image.setAttribute("src", `../images/${imageURL}`)
        image.setAttribute("alt", imageDescription)
        this.#cardCarouselItems.append(cardImage)
    }

    #addDot(index) {
        const dot = document.createElement("div")
        dot.classList.add("dot")
        if (index === 0) dot.classList.add("active")
        this.#carouselIndicator.append(dot)
    }

    #controlNavigationButtons() {
        if (this.#currentIndex <= 0) {
            this.#btnPrevious.style.visibility = "hidden";
        } else if (this.#currentIndex >= this.#images.length - 1) {
            this.#btnNext.style.visibility = "hidden";
        } else {
            this.#btnNext.style.visibility = "visible";
            this.#btnPrevious.style.visibility = "visible";
        }
    }

    #goToImage(index) {
        this.#currentIndex = index
        const offset = -index * 100
        this.#cardCarouselItems.style.transform = `translateX(${offset}%)`
        this.#dots.forEach(dot => dot.classList.remove("active"))
        this.#dots[index].classList.add("active")
    }
}