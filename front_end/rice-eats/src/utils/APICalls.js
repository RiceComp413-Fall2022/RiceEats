import axios from "axios";

export function PostReview(serveryName, currentDate, itemReviews) {
    axios.post("http://127.0.0.1:8000/submitreview", {
        serveryName: serveryName,
        //fix the date to be a function and return current date
        date: currentDate,
        mealType: "Breakfast",
        reviewerNetId: "mdl8",
        reviewerEmail: "mdl8@rice.edu",
        reviewerCollege: "Brown",
        reviewerNumReviews: 1,
        comments: "this was not bad......",
        itemReviews: itemReviews
        
        // itemReviews: [
        //     {
        //         menuItemDietId: 5, // tofu stir fry
        //         rating: 3,
        //         comments: "this is some bomb ass mac n cheese"
        //     }
        // ]
    });
    console.log('finished posting');
}

export function realRetrieveMenus(func) {
    axios.post("http://localhost:8000/serverymenus", 
    // "{'hi': 'bye'}" 
    {
        date: "22-10-01",
        mealType: "Dinner"
    }
    , {'Content-Type': 'application/json'}).then(func);
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