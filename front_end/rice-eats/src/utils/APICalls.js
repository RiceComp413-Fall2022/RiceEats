import axios from "axios";

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