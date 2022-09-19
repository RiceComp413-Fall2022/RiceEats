import axios from "axios";

export function RetrieveMenus() {
    return [
        {
            name: "South",
            overalRating: 4.3,
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
    ]
}