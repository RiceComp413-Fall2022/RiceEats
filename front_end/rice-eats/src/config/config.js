export const serveryList = [
    "South", "West", "North", "Seibel", "Baker"
];

export const serveryName = {
    "South": "South",
    "West": "West",
    "North": "North",
    "Seibel": "Seibel",
    "Baker": "Baker"
};

export const serveryUrl = {
    "South": "/South",
    "West": "/West",
    "North": "/North",
    "Seibel": "/Seibel",
    "Baker": "/Baker"
};

export const serveryMapUrl = {
    "South": "https://www.google.com/maps/place/South+Servery/@29.7156307,-95.4035575,17z/data=!4m5!3m4!1s0x8640c07a430f39af:0x3cd2b7c74faa6fe4!8m2!3d29.715161!4d-95.4012173",
    "West": "https://www.google.com/maps/place/West+Servery/@29.7210597,-95.4006579,17z/data=!3m1!4b1!4m5!3m4!1s0x8640c07ebd5cc87f:0x7c1907be086dd71f!8m2!3d29.7210597!4d-95.3984692",
    "North": "https://www.google.com/maps/place/North+Servery/@29.7219006,-95.3987426,17z/data=!3m1!4b1!4m5!3m4!1s0x8640c07f1d54ac13:0x566bbb6a63a6711d!8m2!3d29.7218276!4d-95.3963882",
    "Seibel": "https://www.google.com/maps/place/Abe+and+Annie+Seibel+Servery/@29.7160065,-95.4006022,17z/data=!3m1!4b1!4m5!3m4!1s0x8640c079900c3119:0x73956ef64083be12!8m2!3d29.7160065!4d-95.3984135",
    "Baker": "https://www.google.com/maps/place/Baker+College/@29.7172288,-95.4011985,17z/data=!3m1!4b1!4m5!3m4!1s0x8640c192b6342669:0x318e651a70c32638!8m2!3d29.7172288!4d-95.3990098"
};

export const backendUrl = "https://rice-eats-backend.herokuapp.com";//https://rice-eats-backend.herokuapp.com//http://127.0.0.1:8000

export const serveryColor = {
    "South": "rgb(58, 64, 90)",
    "West": "rgb(174, 197, 235)",
    "North": "rgb(249, 222, 201)",
    "Seibel": "rgb(233, 175, 163)",
    "Baker": "rgb(104, 80, 68)",
};

export const mealTimes = {
    "Monday": {
        "Breakfast": ["7:30 AM", "10:30 AM"],
        "Lunch": ["11:30 AM", "1:30 PM"],
        "Dinner": ["5:30 PM", "7:30 PM"]
    },
    "Tuesday": {
        "Breakfast": ["7:30 AM", "10:30 AM"],
        "Lunch": ["11:30 AM", "1:30 PM"],
        "Dinner": ["5:30 PM", "7:30 PM"]
    },
    "Wednesday": {
        "Breakfast": ["7:30 AM", "10:30 AM"],
        "Lunch": ["11:30 AM", "1:30 PM"],
        "Dinner": ["5:30 PM", "7:30 PM"]
    },
    "Thursday": {
        "Breakfast": ["7:30 AM", "10:30 AM"],
        "Lunch": ["11:30 AM", "1:30 PM"],
        "Dinner": ["5:30 PM", "7:30 PM"]
    },
    "Friday": {
        "Breakfast": ["7:30 AM", "10:30 AM"],
        "Lunch": ["11:30 AM", "1:30 PM"],
        "Dinner": ["5:30 PM", "7:30 PM"]
    },
    "Saturday": {
        "Breakfast": ["8:00 AM", "10:30 AM"],
        "Lunch": ["11:30 AM", "2:00 PM"],
        "Dinner": ["5:30 PM", "7:30 PM"]
    },
    "Sunday": {
        "Breakfast": ["8:00 AM", "10:30 AM"],
        "Lunch": ["11:30 AM", "2:00 PM"],
        "Dinner": ["5:00 PM", "7:30 PM"]
    }
};

export const availableServeries = {
    "Monday": {
        "Breakfast": ["North", "South", "West", "Seibel", "Baker"],
        "Lunch": ["North", "South", "West", "Seibel", "Baker"],
        "Dinner": ["North", "South", "West", "Seibel", "Baker"],
    },
    "Tuesday": {
        "Breakfast": ["North", "South", "West", "Seibel", "Baker"],
        "Lunch": ["North", "South", "West", "Seibel", "Baker"],
        "Dinner": ["North", "South", "West", "Seibel", "Baker"],
    },
    "Wednesday": {
        "Breakfast": ["North", "South", "West", "Seibel", "Baker"],
        "Lunch": ["North", "South", "West", "Seibel", "Baker"],
        "Dinner": ["North", "South", "West", "Seibel", "Baker"],
    },
    "Thursday": {
        "Breakfast": ["North", "South", "West", "Seibel", "Baker"],
        "Lunch": ["North", "South", "West", "Seibel", "Baker"],
        "Dinner": ["North", "South", "West", "Seibel", "Baker"],
    },
    "Friday": {
        "Breakfast": ["North", "South", "West", "Seibel", "Baker"],
        "Lunch": ["North", "South", "West", "Seibel", "Baker"],
        "Dinner": ["North", "South", "West", "Seibel", "Baker"],
    },
    "Saturday": {
        "Breakfast": ["West", "Seibel"],
        "Lunch": ["West", "Seibel"],
        "Dinner": ["West", "Seibel"],
    },
    "Sunday": {
        "Breakfast": ["West", "Seibel"],
        "Lunch": ["North", "South", "West", "Seibel"],
        "Dinner": ["North", "South", "West", "Seibel"],
    },
}

export const getOrderedServeryList = () => {
    try {
        const serializedState = localStorage.getItem('orderedServeryList');
        if (serializedState == null) {
            return serveryList;
        } else {
            return JSON.parse(serializedState)
        }
    } catch (e) {
        console.log("ERROR in getOrderedServeryList");
    }
};

export const setOrderedServeryList = (newList) => {
    try {
        const serializedState = JSON.stringify(newList);
        localStorage.setItem('orderedServeryList', serializedState);
    } catch (e) {
        console.log("ERROR in setOrderedServeryList");
    }
};

export const getScreenSize = () => {
    if (window.innerWidth > 1600) {
        return "large";
    } else if (window.innerWidth > 800) {
        return "medium";
    } else {
        return "small";
    }
}