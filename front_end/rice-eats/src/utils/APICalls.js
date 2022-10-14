import axios from "axios";

export function PostReview() {
    axios.post("http://127.0.0.1:8000/submitreview", {
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

export function realRetrieveMenus() {
    axios.post("http://localhost:8000/serverymenus", 
    // "{'hi': 'bye'}" 
    {
        date: "22-10-01",
        mealType: "Dinner"
    }
    , {'Content-Type': 'application/json'}).then(console.log);
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