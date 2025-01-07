import { Card } from "./card.js";

const data = [
    {
        location: "Bairro Mellos, Brazil",
        distance: "11,065 kilometers away",
        period: "Mar 24-29",
        price: "$250",
        ranking: "4.88",
        isGuessFavorite: false,
        isLiked: false,
        images: [
            {
                url: "card-image1.avif",
                description: "Image 1"
            },
            {
                url: "card-image2.avif",
                description: "Image 2"
            },
            {
                url: "card-image3.avif",
                description: "Image 3"
            },
            {
                url: "card-image4.avif",
                description: "Image 4"
            },
            {
                url: "card-image5.avif",
                description: "Image 5"
            },
        ]
    },
    {
        location: "El Cuyo, Mexico",
        distance: "10,570 kilometers away",
        period: "Jan 7-12",
        price: "$108",
        ranking: "4.85",
        isGuessFavorite: true,
        isLiked: false,
        images: [
            {
                url: "card-image5.avif",
                description: "Image 5"
            },
            {
                url: "card-image3.avif",
                description: "Image 3"
            },
            {
                url: "card-image2.avif",
                description: "Image 2"
            },
            {
                url: "card-image1.avif",
                description: "Image 1"
            },
            {
                url: "card-image4.avif",
                description: "Image 4"
            },
        ]
    },
    {
        location: "El Cuyo, Mexico",
        distance: "10,570 kilometers away",
        period: "Jan 7-12",
        price: "$108",
        ranking: "4.85",
        isGuessFavorite: true,
        isLiked: true,
        images: [
            {
                url: "card-image5.avif",
                description: "Image 5"
            },
            {
                url: "card-image3.avif",
                description: "Image 3"
            },
            {
                url: "card-image2.avif",
                description: "Image 2"
            },
            {
                url: "card-image1.avif",
                description: "Image 1"
            },
            {
                url: "card-image4.avif",
                description: "Image 4"
            },
        ]
    }
]

const container = document.getElementById("container")
data.forEach(item => {
    const card = new Card(item.location, item.distance, item.period, item.price, item.ranking, item.isGuessFavorite, item.isLiked, item.images)
    const cardElement = card.cardElement
    container.append(cardElement)
});

