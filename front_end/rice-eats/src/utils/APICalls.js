import axios from "axios";
import { backendUrl } from "../config/config";

export function PostReview(serveryName, date, mealType, netId, itemReviews, callback) {
    // console.log(itemReviews);
    axios.post(backendUrl + "/submitreview", {
        serveryName: serveryName,
        date: date,
        mealType: mealType,
        reviewerNetId: netId,
        reviewerEmail: "N/A",
        reviewerCollege: "Baker", // TODO: get rid of this parameter. backend needs it for now but doesn't use it
        reviewerNumReviews: 1,
        comments: "N/A",
        itemReviews: itemReviews
    }).then(callback);
}

export function realRetrieveMenus(func, date, mealType) {
    // console.log("hi");
    // console.log(date);
    const realDate = date.substring(2);
    axios.post(backendUrl + "/serverymenus",
    {
        date: realDate,
        mealType: mealType
    }
    , {'Content-Type': 'application/json'}).then((response) => {
        console.log(response);
        func(response)
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