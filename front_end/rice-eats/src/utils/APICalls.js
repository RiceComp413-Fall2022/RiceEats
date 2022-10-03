import axios from "axios";

export function PostReview() {
    axios.post("url", {
        serveryName: "south",
        date: "dateformat",
        mealType: "breakfast",
        itemReviews: [
            {
                name: "Meatloaf",
                rating: 3,
                comments: ""
            }
        ]
    });
}

export function realRetrieveMenus() {
    axios.post("url", {
        date: "2022-10-01",
        mealType: "Breakfast"
    });
}

export function RetrieveMenus() {
    return {
        south: {
            overallRating: 4.3,
            menuItems: [
                {
                    name: "Meatloaf",
                    rating: 3.2
                }, 
                {
                    name: "Lasagna",
                    rating: 4.8
                },
                {
                    name: "Lasagna",
                    rating: 4.8
                },
            ]
        },
        west: {
            overallRating: 3.3,
            menuItems: [
                {
                    name: "Meatloaf",
                    rating: 3.2
                }, 
                {
                    name: "Lasagna",
                    rating: 4.8
                },
            ]
        },
        north: {
            overallRating: 1.3,
            menuItems: [
                {
                    name: "Meatloaf",
                    rating: 3.2
                }, 
                {
                    name: "Lasagna",
                    rating: 4.8
                },
            ]
        },
        seibel: {
            overallRating: 1.3,
            menuItems: [
                {
                    name: "Meatloaf",
                    rating: 3.2
                }, 
                {
                    name: "Lasagna",
                    rating: 4.8
                },
            ]
        },
        baker: {
            overallRating: 1.3,
            menuItems: [
                {
                    name: "Meatloaf",
                    rating: 3.2
                }, 
                {
                    name: "Lasagna",
                    rating: 4.8
                },
            ]
        },
    }
}