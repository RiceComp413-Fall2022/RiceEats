import axios from "axios";
import { backendUrl } from "../config/config";

export function PostReview() {
    axios.post(backendUrl + "/submitreview", {
        serveryName: "South",
        date: "2022-10-05",
        mealType: "Breakfast",
        reviewerNetId: "mdl8",
        reviewerEmail: "mdl8@rice.edu",
        reviewerCollege: "Brown",
        reviewerNumReviews: 0,
        comments: "this was not bad......",
        itemReviews: [
            {
                menuItemDietId: 5, // tofu stir fry
                rating: 3,
                comments: "this is some bomb ass mac n cheese"
            }
        ]
    });
}

export function realRetrieveMenus(func, date, mealType) {
    const realDate = date.substring(2);
    axios.post(backendUrl + "/serverymenus",
    {
        date: realDate,
        mealType: mealType
    }
    , {'Content-Type': 'application/json'}).then((data) => {
        console.log(data);
        func(data);
    });
}

export function RetrieveMenus() {
    return {
        South: {
            overallRating: 4.3,
            menuItemDiet: [
                {
                    menuItem_id: "Meatloaf",
                    rating: 3.2
                }, 
                {
                    menuItem_id: "Lasagna",
                    rating: 4.8
                },
                {
                    menuItem_id: "Lasagna",
                    rating: 4.8
                },
            ]
        },
        West: {
            overallRating: 3.3,
            menuItemDiet: [
                {
                    menuItem_id: "Meatloaf",
                    rating: 3.2
                }, 
                {
                    menuItem_id: "Lasagna",
                    rating: 4.8
                },
            ]
        },
        North: {
            overallRating: 1.3,
            menuItemDiet: [
                {
                    menuItem_id: "Meatloaf",
                    rating: 3.2
                }, 
                {
                    menuItem_id: "Lasagna",
                    rating: 4.8
                },
            ]
        },
        Seibel: {
            overallRating: 1.3,
            menuItemDiet: [
                {
                    menuItem_id: "Meatloaf",
                    rating: 3.2
                }, 
                {
                    menuItem_id: "Lasagna",
                    rating: 4.8
                },
            ]
        },
        Baker: {
            overallRating: 1.3,
            menuItemDiet: [
                {
                    menuItem_id: "Meatloaf",
                    rating: 3.2
                }, 
                {
                    menuItem_id: "Lasagna",
                    rating: 4.8
                },
            ]
        },
    }
}