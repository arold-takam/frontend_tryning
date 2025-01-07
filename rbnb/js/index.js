import {Card} from "./card.js";
import {Tabs} from "./tabs.js";

const cardsData = [
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
                url: "card-image4.avif",
                description: "Image 4"
            },
            {
                url: "card-image3.avif",
                description: "Image 3"
            },
            {
                url: "card-image5.avif",
                description: "Image 5"
            },
            {
                url: "card-image2.avif",
                description: "Image 2"
            },
            {
                url: "card-image1.avif",
                description: "Image 1"
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
const tabsData = [
    {
        tab: "Popular",
        content: [
            {
                location: "Canmore",
                type: "Condo rentals"
            },
            {
                location: "Marbella",
                type: "Cottage rentals"
            },
            {
                location: "Prescott",
                type: "Cabin rentals"
            },
            {
                location: "Tucson",
                type: "Mansion rentals"
            },
            {
                location: "Benalmádena",
                type: "House rentals"
            },
            {
                location: "Mijas",
                type: "Apartment rentals"
            },
            {
                location: "Scottsdale",
                type: "Rentals with pools"
            },
            {
                location: "Jasper",
                type: "Cabin rentals"
            },
            {
                location: "Mountain View",
                type: "Cabin rentals"
            },
            {
                location: "Devonport",
                type: "Cottage rentals"
            },
            {
                location: "Mallacoota",
                type: "Pet-friendly rentals"
            },
            {
                location: "Ibiza",
                type: "Vacation rentals"
            },
            {
                location: "Anaheim",
                type: "Apartments rentals"
            },
            {
                location: "Monterey",
                type: "Cottage rentals"
            },
            {
                location: "Paso Robles",
                type: "House rentals"
            },
            {
                location: "Santa Barbara",
                type: "Condo rentals"
            },
            {
                location: "Sonoma",
                type: "Cabin rentals"
            },
            {
                location: "La Serena",
                type: "Condo rentals"
            },
            {
                location: "Dubai",
                type: "Beach house rentals"
            },
            {
                location: "Birmingham",
                type: "Apartment rentals"
            },
            {
                location: "Brighton",
                type: "House rentals"
            },
            {
                location: "Palm Springs",
                type: "Cabin rentals"
            },
            {
                location: "New York City",
                type: "Cottage rentals"
            },
            {
                location: "Las Vegas",
                type: "Condo rentals"
            },
            {
                location: "Austin",
                type: "House rentals"
            },
            {
                location: "Sydney",
                type: "Rentals with pools"
            },
            {
                location: "Tokyo",
                type: "Pet-friendly rentals"
            },
            {
                location: "Canggu",
                type: "Vacation rentals"
            },
            {
                location: "San Francisco",
                type: "Apartments rentals"
            },
            {
                location: "San Diego",
                type: "Cottage rentals"
            },
        ]
    },
    {
        tab: "Arts & culture",
        content: [
            {
                location: "Phoenix",
                type: "Rentals with pools"
            },
            {
                location: "Hot Springs",
                type: "House rentals"
            },
            {
                location: "Los Angeles",
                type: "House rentals"
            },
            {
                location: "San Diego",
                type: "Apartment rentals"
            },
            {
                location: "San Francisco",
                type: "Vacation rentals"
            },
            {
                location: "Barcelona",
                type: "Vacation rentals"
            },
            {
                location: "Prague",
                type: "Vacation rentals"
            },
            {
                location: "Washington",
                type: "Apartment rentals"
            },
            {
                location: "Keswick",
                type: "Apartment rentals"
            },
            {
                location: "London",
                type: "Villa rentals"
            },
            {
                location: "Scarborough",
                type: "Vacation rentals"
            },
            {
                location: "Paris",
                type: "Luxury rentals"
            },
            {
                location: "Rome",
                type: "Historic rentals"
            },
            {
                location: "Miami",
                type: "Beachfront rentals"
            },
            {
                location: "Hawaii",
                type: "Island rentals"
            },
            {
                location: "Nashville",
                type: "Country rentals"
            },
            {
                location: "Seattle",
                type: "Urban rentals"
            },
            {
                location: "Chicago",
                type: "Downtown rentals"
            },
            {
                location: "Boston",
                type: "Colonial rentals"
            },
            {
                location: "Orlando",
                type: "Theme park rentals"
            },
            {
                location: "Toronto",
                type: "City rentals"
            },
            {
                location: "Vancouver",
                type: "Mountain rentals"
            },
            {
                location: "Quebec City",
                type: "Chateau rentals"
            },
            {
                location: "Copenhagen",
                type: "Scandinavian rentals"
            },
            {
                location: "Dubai",
                type: "Luxury rentals"
            },
            {
                location: "Cape Town",
                type: "Coastal rentals"
            },
            {
                location: "Reykjavik",
                type: "Icelandic rentals"
            },
            {
                location: "Marrakesh",
                type: "Riad rentals"
            },
            {
                location: "Florence",
                type: "Villa rentals"
            },
            {
                location: "Sydney",
                type: "Waterfront rentals"
            }
        ]
    },
    {
        tab: "Outdoors",
        content: [
            {
                location: "Canmore",
                type: "Condo rentals"
            },
            {
                location: "Marbella",
                type: "Cottage rentals"
            },
            {
                location: "Prescott",
                type: "Cabin rentals"
            },
            {
                location: "Tucson",
                type: "Mansion rentals"
            },
            {
                location: "Benalmádena",
                type: "House rentals"
            },
            {
                location: "Mijas",
                type: "Apartment rentals"
            },
            {
                location: "Scottsdale",
                type: "Rentals with pools"
            },
            {
                location: "Jasper",
                type: "Cabin rentals"
            },
            {
                location: "Mountain View",
                type: "Cabin rentals"
            },
            {
                location: "Devonport",
                type: "Cottage rentals"
            },
            {
                location: "Mallacoota",
                type: "Pet-friendly rentals"
            },
            {
                location: "Ibiza",
                type: "Vacation rentals"
            },
            {
                location: "Anaheim",
                type: "Apartments rentals"
            },
            {
                location: "Monterey",
                type: "Cottage rentals"
            },
            {
                location: "Paso Robles",
                type: "House rentals"
            },
            {
                location: "Santa Barbara",
                type: "Condo rentals"
            },
            {
                location: "Sonoma",
                type: "Cabin rentals"
            },
            {
                location: "La Serena",
                type: "Condo rentals"
            },
            {
                location: "Dubai",
                type: "Beach house rentals"
            },
            {
                location: "Birmingham",
                type: "Apartment rentals"
            },
            {
                location: "Brighton",
                type: "House rentals"
            },
            {
                location: "Palm Springs",
                type: "Cabin rentals"
            },
            {
                location: "New York City",
                type: "Cottage rentals"
            },
            {
                location: "Las Vegas",
                type: "Condo rentals"
            },
            {
                location: "Austin",
                type: "House rentals"
            },
            {
                location: "Sydney",
                type: "Rentals with pools"
            },
            {
                location: "Tokyo",
                type: "Pet-friendly rentals"
            },
            {
                location: "Canggu",
                type: "Vacation rentals"
            },
            {
                location: "San Francisco",
                type: "Apartments rentals"
            },
            {
                location: "San Diego",
                type: "Cottage rentals"
            },
        ]
    },
    {
        tab: "Mountains",
        content: [
            {
                location: "Phoenix",
                type: "Rentals with pools"
            },
            {
                location: "Hot Springs",
                type: "House rentals"
            },
            {
                location: "Los Angeles",
                type: "House rentals"
            },
            {
                location: "San Diego",
                type: "Apartment rentals"
            },
            {
                location: "San Francisco",
                type: "Vacation rentals"
            },
            {
                location: "Barcelona",
                type: "Vacation rentals"
            },
            {
                location: "Prague",
                type: "Vacation rentals"
            },
            {
                location: "Washington",
                type: "Apartment rentals"
            },
            {
                location: "Keswick",
                type: "Apartment rentals"
            },
            {
                location: "London",
                type: "Villa rentals"
            },
            {
                location: "Scarborough",
                type: "Vacation rentals"
            },
            {
                location: "Paris",
                type: "Luxury rentals"
            },
            {
                location: "Rome",
                type: "Historic rentals"
            },
            {
                location: "Miami",
                type: "Beachfront rentals"
            },
            {
                location: "Hawaii",
                type: "Island rentals"
            },
            {
                location: "Nashville",
                type: "Country rentals"
            },
            {
                location: "Seattle",
                type: "Urban rentals"
            },
            {
                location: "Chicago",
                type: "Downtown rentals"
            },
            {
                location: "Boston",
                type: "Colonial rentals"
            },
            {
                location: "Orlando",
                type: "Theme park rentals"
            },
            {
                location: "Toronto",
                type: "City rentals"
            },
            {
                location: "Vancouver",
                type: "Mountain rentals"
            },
            {
                location: "Quebec City",
                type: "Chateau rentals"
            },
            {
                location: "Copenhagen",
                type: "Scandinavian rentals"
            },
            {
                location: "Dubai",
                type: "Luxury rentals"
            },
            {
                location: "Cape Town",
                type: "Coastal rentals"
            },
            {
                location: "Reykjavik",
                type: "Icelandic rentals"
            },
            {
                location: "Marrakesh",
                type: "Riad rentals"
            },
            {
                location: "Florence",
                type: "Villa rentals"
            },
            {
                location: "Sydney",
                type: "Waterfront rentals"
            }
        ]
    },
    {
        tab: "Beach",
        content: [
            {
                location: "Canmore",
                type: "Condo rentals"
            },
            {
                location: "Marbella",
                type: "Cottage rentals"
            },
            {
                location: "Prescott",
                type: "Cabin rentals"
            },
            {
                location: "Tucson",
                type: "Mansion rentals"
            },
            {
                location: "Benalmádena",
                type: "House rentals"
            },
            {
                location: "Mijas",
                type: "Apartment rentals"
            },
            {
                location: "Scottsdale",
                type: "Rentals with pools"
            },
            {
                location: "Jasper",
                type: "Cabin rentals"
            },
            {
                location: "Mountain View",
                type: "Cabin rentals"
            },
            {
                location: "Devonport",
                type: "Cottage rentals"
            },
            {
                location: "Mallacoota",
                type: "Pet-friendly rentals"
            },
            {
                location: "Ibiza",
                type: "Vacation rentals"
            },
            {
                location: "Anaheim",
                type: "Apartments rentals"
            },
            {
                location: "Monterey",
                type: "Cottage rentals"
            },
            {
                location: "Paso Robles",
                type: "House rentals"
            },
            {
                location: "Santa Barbara",
                type: "Condo rentals"
            },
            {
                location: "Sonoma",
                type: "Cabin rentals"
            },
            {
                location: "La Serena",
                type: "Condo rentals"
            },
            {
                location: "Dubai",
                type: "Beach house rentals"
            },
            {
                location: "Birmingham",
                type: "Apartment rentals"
            },
            {
                location: "Brighton",
                type: "House rentals"
            },
            {
                location: "Palm Springs",
                type: "Cabin rentals"
            },
            {
                location: "New York City",
                type: "Cottage rentals"
            },
            {
                location: "Las Vegas",
                type: "Condo rentals"
            },
            {
                location: "Austin",
                type: "House rentals"
            },
            {
                location: "Sydney",
                type: "Rentals with pools"
            },
            {
                location: "Tokyo",
                type: "Pet-friendly rentals"
            },
            {
                location: "Canggu",
                type: "Vacation rentals"
            },
            {
                location: "San Francisco",
                type: "Apartments rentals"
            },
            {
                location: "San Diego",
                type: "Cottage rentals"
            },
        ]
    },
    {
        tab: "Unique stays",
        content: [
            {
                location: "Phoenix",
                type: "Rentals with pools"
            },
            {
                location: "Hot Springs",
                type: "House rentals"
            },
            {
                location: "Los Angeles",
                type: "House rentals"
            },
            {
                location: "San Diego",
                type: "Apartment rentals"
            },
            {
                location: "San Francisco",
                type: "Vacation rentals"
            },
            {
                location: "Barcelona",
                type: "Vacation rentals"
            },
            {
                location: "Prague",
                type: "Vacation rentals"
            },
            {
                location: "Washington",
                type: "Apartment rentals"
            },
            {
                location: "Keswick",
                type: "Apartment rentals"
            },
            {
                location: "London",
                type: "Villa rentals"
            },
            {
                location: "Scarborough",
                type: "Vacation rentals"
            },
            {
                location: "Paris",
                type: "Luxury rentals"
            },
            {
                location: "Rome",
                type: "Historic rentals"
            },
            {
                location: "Miami",
                type: "Beachfront rentals"
            },
            {
                location: "Hawaii",
                type: "Island rentals"
            },
            {
                location: "Nashville",
                type: "Country rentals"
            },
            {
                location: "Seattle",
                type: "Urban rentals"
            },
            {
                location: "Chicago",
                type: "Downtown rentals"
            },
            {
                location: "Boston",
                type: "Colonial rentals"
            },
            {
                location: "Orlando",
                type: "Theme park rentals"
            },
            {
                location: "Toronto",
                type: "City rentals"
            },
            {
                location: "Vancouver",
                type: "Mountain rentals"
            },
            {
                location: "Quebec City",
                type: "Chateau rentals"
            },
            {
                location: "Copenhagen",
                type: "Scandinavian rentals"
            },
            {
                location: "Dubai",
                type: "Luxury rentals"
            },
            {
                location: "Cape Town",
                type: "Coastal rentals"
            },
            {
                location: "Reykjavik",
                type: "Icelandic rentals"
            },
            {
                location: "Marrakesh",
                type: "Riad rentals"
            },
            {
                location: "Florence",
                type: "Villa rentals"
            },
            {
                location: "Sydney",
                type: "Waterfront rentals"
            }
        ]
    },
    {
        tab: "Popular",
        content: [
            {
                location: "Canmore",
                type: "Condo rentals"
            },
            {
                location: "Marbella",
                type: "Cottage rentals"
            },
            {
                location: "Prescott",
                type: "Cabin rentals"
            },
            {
                location: "Tucson",
                type: "Mansion rentals"
            },
            {
                location: "Benalmádena",
                type: "House rentals"
            },
            {
                location: "Mijas",
                type: "Apartment rentals"
            },
            {
                location: "Scottsdale",
                type: "Rentals with pools"
            },
            {
                location: "Jasper",
                type: "Cabin rentals"
            },
            {
                location: "Mountain View",
                type: "Cabin rentals"
            },
            {
                location: "Devonport",
                type: "Cottage rentals"
            },
            {
                location: "Mallacoota",
                type: "Pet-friendly rentals"
            },
            {
                location: "Ibiza",
                type: "Vacation rentals"
            },
            {
                location: "Anaheim",
                type: "Apartments rentals"
            },
            {
                location: "Monterey",
                type: "Cottage rentals"
            },
            {
                location: "Paso Robles",
                type: "House rentals"
            },
            {
                location: "Santa Barbara",
                type: "Condo rentals"
            },
            {
                location: "Sonoma",
                type: "Cabin rentals"
            },
            {
                location: "La Serena",
                type: "Condo rentals"
            },
            {
                location: "Dubai",
                type: "Beach house rentals"
            },
            {
                location: "Birmingham",
                type: "Apartment rentals"
            },
            {
                location: "Brighton",
                type: "House rentals"
            },
            {
                location: "Palm Springs",
                type: "Cabin rentals"
            },
            {
                location: "New York City",
                type: "Cottage rentals"
            },
            {
                location: "Las Vegas",
                type: "Condo rentals"
            },
            {
                location: "Austin",
                type: "House rentals"
            },
            {
                location: "Sydney",
                type: "Rentals with pools"
            },
            {
                location: "Tokyo",
                type: "Pet-friendly rentals"
            },
            {
                location: "Canggu",
                type: "Vacation rentals"
            },
            {
                location: "San Francisco",
                type: "Apartments rentals"
            },
            {
                location: "San Diego",
                type: "Cottage rentals"
            },
        ]
    },
    {
        tab: "Arts & culture",
        content: [
            {
                location: "Phoenix",
                type: "Rentals with pools"
            },
            {
                location: "Hot Springs",
                type: "House rentals"
            },
            {
                location: "Los Angeles",
                type: "House rentals"
            },
            {
                location: "San Diego",
                type: "Apartment rentals"
            },
            {
                location: "San Francisco",
                type: "Vacation rentals"
            },
            {
                location: "Barcelona",
                type: "Vacation rentals"
            },
            {
                location: "Prague",
                type: "Vacation rentals"
            },
            {
                location: "Washington",
                type: "Apartment rentals"
            },
            {
                location: "Keswick",
                type: "Apartment rentals"
            },
            {
                location: "London",
                type: "Villa rentals"
            },
            {
                location: "Scarborough",
                type: "Vacation rentals"
            },
            {
                location: "Paris",
                type: "Luxury rentals"
            },
            {
                location: "Rome",
                type: "Historic rentals"
            },
            {
                location: "Miami",
                type: "Beachfront rentals"
            },
            {
                location: "Hawaii",
                type: "Island rentals"
            },
            {
                location: "Nashville",
                type: "Country rentals"
            },
            {
                location: "Seattle",
                type: "Urban rentals"
            },
            {
                location: "Chicago",
                type: "Downtown rentals"
            },
            {
                location: "Boston",
                type: "Colonial rentals"
            },
            {
                location: "Orlando",
                type: "Theme park rentals"
            },
            {
                location: "Toronto",
                type: "City rentals"
            },
            {
                location: "Vancouver",
                type: "Mountain rentals"
            },
            {
                location: "Quebec City",
                type: "Chateau rentals"
            },
            {
                location: "Copenhagen",
                type: "Scandinavian rentals"
            },
            {
                location: "Dubai",
                type: "Luxury rentals"
            },
            {
                location: "Cape Town",
                type: "Coastal rentals"
            },
            {
                location: "Reykjavik",
                type: "Icelandic rentals"
            },
            {
                location: "Marrakesh",
                type: "Riad rentals"
            },
            {
                location: "Florence",
                type: "Villa rentals"
            },
            {
                location: "Sydney",
                type: "Waterfront rentals"
            }
        ]
    },
    {
        tab: "Outdoors",
        content: [
            {
                location: "Canmore",
                type: "Condo rentals"
            },
            {
                location: "Marbella",
                type: "Cottage rentals"
            },
            {
                location: "Prescott",
                type: "Cabin rentals"
            },
            {
                location: "Tucson",
                type: "Mansion rentals"
            },
            {
                location: "Benalmádena",
                type: "House rentals"
            },
            {
                location: "Mijas",
                type: "Apartment rentals"
            },
            {
                location: "Scottsdale",
                type: "Rentals with pools"
            },
            {
                location: "Jasper",
                type: "Cabin rentals"
            },
            {
                location: "Mountain View",
                type: "Cabin rentals"
            },
            {
                location: "Devonport",
                type: "Cottage rentals"
            },
            {
                location: "Mallacoota",
                type: "Pet-friendly rentals"
            },
            {
                location: "Ibiza",
                type: "Vacation rentals"
            },
            {
                location: "Anaheim",
                type: "Apartments rentals"
            },
            {
                location: "Monterey",
                type: "Cottage rentals"
            },
            {
                location: "Paso Robles",
                type: "House rentals"
            },
            {
                location: "Santa Barbara",
                type: "Condo rentals"
            },
            {
                location: "Sonoma",
                type: "Cabin rentals"
            },
            {
                location: "La Serena",
                type: "Condo rentals"
            },
            {
                location: "Dubai",
                type: "Beach house rentals"
            },
            {
                location: "Birmingham",
                type: "Apartment rentals"
            },
            {
                location: "Brighton",
                type: "House rentals"
            },
            {
                location: "Palm Springs",
                type: "Cabin rentals"
            },
            {
                location: "New York City",
                type: "Cottage rentals"
            },
            {
                location: "Las Vegas",
                type: "Condo rentals"
            },
            {
                location: "Austin",
                type: "House rentals"
            },
            {
                location: "Sydney",
                type: "Rentals with pools"
            },
            {
                location: "Tokyo",
                type: "Pet-friendly rentals"
            },
            {
                location: "Canggu",
                type: "Vacation rentals"
            },
            {
                location: "San Francisco",
                type: "Apartments rentals"
            },
            {
                location: "San Diego",
                type: "Cottage rentals"
            },
        ]
    },
    {
        tab: "Mountains",
        content: [
            {
                location: "Phoenix",
                type: "Rentals with pools"
            },
            {
                location: "Hot Springs",
                type: "House rentals"
            },
            {
                location: "Los Angeles",
                type: "House rentals"
            },
            {
                location: "San Diego",
                type: "Apartment rentals"
            },
            {
                location: "San Francisco",
                type: "Vacation rentals"
            },
            {
                location: "Barcelona",
                type: "Vacation rentals"
            },
            {
                location: "Prague",
                type: "Vacation rentals"
            },
            {
                location: "Washington",
                type: "Apartment rentals"
            },
            {
                location: "Keswick",
                type: "Apartment rentals"
            },
            {
                location: "London",
                type: "Villa rentals"
            },
            {
                location: "Scarborough",
                type: "Vacation rentals"
            },
            {
                location: "Paris",
                type: "Luxury rentals"
            },
            {
                location: "Rome",
                type: "Historic rentals"
            },
            {
                location: "Miami",
                type: "Beachfront rentals"
            },
            {
                location: "Hawaii",
                type: "Island rentals"
            },
            {
                location: "Nashville",
                type: "Country rentals"
            },
            {
                location: "Seattle",
                type: "Urban rentals"
            },
            {
                location: "Chicago",
                type: "Downtown rentals"
            },
            {
                location: "Boston",
                type: "Colonial rentals"
            },
            {
                location: "Orlando",
                type: "Theme park rentals"
            },
            {
                location: "Toronto",
                type: "City rentals"
            },
            {
                location: "Vancouver",
                type: "Mountain rentals"
            },
            {
                location: "Quebec City",
                type: "Chateau rentals"
            },
            {
                location: "Copenhagen",
                type: "Scandinavian rentals"
            },
            {
                location: "Dubai",
                type: "Luxury rentals"
            },
            {
                location: "Cape Town",
                type: "Coastal rentals"
            },
            {
                location: "Reykjavik",
                type: "Icelandic rentals"
            },
            {
                location: "Marrakesh",
                type: "Riad rentals"
            },
            {
                location: "Florence",
                type: "Villa rentals"
            },
            {
                location: "Sydney",
                type: "Waterfront rentals"
            }
        ]
    },
    {
        tab: "Beach",
        content: [
            {
                location: "Canmore",
                type: "Condo rentals"
            },
            {
                location: "Marbella",
                type: "Cottage rentals"
            },
            {
                location: "Prescott",
                type: "Cabin rentals"
            },
            {
                location: "Tucson",
                type: "Mansion rentals"
            },
            {
                location: "Benalmádena",
                type: "House rentals"
            },
            {
                location: "Mijas",
                type: "Apartment rentals"
            },
            {
                location: "Scottsdale",
                type: "Rentals with pools"
            },
            {
                location: "Jasper",
                type: "Cabin rentals"
            },
            {
                location: "Mountain View",
                type: "Cabin rentals"
            },
            {
                location: "Devonport",
                type: "Cottage rentals"
            },
            {
                location: "Mallacoota",
                type: "Pet-friendly rentals"
            },
            {
                location: "Ibiza",
                type: "Vacation rentals"
            },
            {
                location: "Anaheim",
                type: "Apartments rentals"
            },
            {
                location: "Monterey",
                type: "Cottage rentals"
            },
            {
                location: "Paso Robles",
                type: "House rentals"
            },
            {
                location: "Santa Barbara",
                type: "Condo rentals"
            },
            {
                location: "Sonoma",
                type: "Cabin rentals"
            },
            {
                location: "La Serena",
                type: "Condo rentals"
            },
            {
                location: "Dubai",
                type: "Beach house rentals"
            },
            {
                location: "Birmingham",
                type: "Apartment rentals"
            },
            {
                location: "Brighton",
                type: "House rentals"
            },
            {
                location: "Palm Springs",
                type: "Cabin rentals"
            },
            {
                location: "New York City",
                type: "Cottage rentals"
            },
            {
                location: "Las Vegas",
                type: "Condo rentals"
            },
            {
                location: "Austin",
                type: "House rentals"
            },
            {
                location: "Sydney",
                type: "Rentals with pools"
            },
            {
                location: "Tokyo",
                type: "Pet-friendly rentals"
            },
            {
                location: "Canggu",
                type: "Vacation rentals"
            },
            {
                location: "San Francisco",
                type: "Apartments rentals"
            },
            {
                location: "San Diego",
                type: "Cottage rentals"
            },
        ]
    },
    {
        tab: "Unique stays",
        content: [
            {
                location: "Phoenix",
                type: "Rentals with pools"
            },
            {
                location: "Hot Springs",
                type: "House rentals"
            },
            {
                location: "Los Angeles",
                type: "House rentals"
            },
            {
                location: "San Diego",
                type: "Apartment rentals"
            },
            {
                location: "San Francisco",
                type: "Vacation rentals"
            },
            {
                location: "Barcelona",
                type: "Vacation rentals"
            },
            {
                location: "Prague",
                type: "Vacation rentals"
            },
            {
                location: "Washington",
                type: "Apartment rentals"
            },
            {
                location: "Keswick",
                type: "Apartment rentals"
            },
            {
                location: "London",
                type: "Villa rentals"
            },
            {
                location: "Scarborough",
                type: "Vacation rentals"
            },
            {
                location: "Paris",
                type: "Luxury rentals"
            },
            {
                location: "Rome",
                type: "Historic rentals"
            },
            {
                location: "Miami",
                type: "Beachfront rentals"
            },
            {
                location: "Hawaii",
                type: "Island rentals"
            },
            {
                location: "Nashville",
                type: "Country rentals"
            },
            {
                location: "Seattle",
                type: "Urban rentals"
            },
            {
                location: "Chicago",
                type: "Downtown rentals"
            },
            {
                location: "Boston",
                type: "Colonial rentals"
            },
            {
                location: "Orlando",
                type: "Theme park rentals"
            },
            {
                location: "Toronto",
                type: "City rentals"
            },
            {
                location: "Vancouver",
                type: "Mountain rentals"
            },
            {
                location: "Quebec City",
                type: "Chateau rentals"
            },
            {
                location: "Copenhagen",
                type: "Scandinavian rentals"
            },
            {
                location: "Dubai",
                type: "Luxury rentals"
            },
            {
                location: "Cape Town",
                type: "Coastal rentals"
            },
            {
                location: "Reykjavik",
                type: "Icelandic rentals"
            },
            {
                location: "Marrakesh",
                type: "Riad rentals"
            },
            {
                location: "Florence",
                type: "Villa rentals"
            },
            {
                location: "Sydney",
                type: "Waterfront rentals"
            }
        ]
    },
]

addCards();
addFooterTabs();

function addCards() {
    const container = document.getElementById("cards-container")
    cardsData.forEach(cardData => {
        const card = new Card(cardData)
        const cardElement = card.cardElement
        container.append(cardElement)
    });
}

function addFooterTabs() {
    const footerInspirationSection = document.querySelector(".footer-inspiration-section");
    let tabsContainer = new Tabs(tabsData).tabsContainer;
    footerInspirationSection.append(tabsContainer)
    // tabsContainer.updateScrollButtons()
}
