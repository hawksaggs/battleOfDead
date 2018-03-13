var zombies = [{
        "x": 16.6,
        "y": 13.7
    },
    {
        "x": 16.1,
        "y": 15.7
    },
    {
        "x": 15.9,
        "y": 11.5
    },
    {
        "x": 16.5,
        "y": 11.4
    },
    {
        "x": 11.1,
        "y": 14.3
    },
    {
        "x": 11,
        "y": 14.3
    },
    {
        "x": 13.8,
        "y": 15.5
    },
    {
        "x": 18.5,
        "y": 15.3
    },
    {
        "x": 16.8,
        "y": 7.6
    },
    {
        "x": 14,
        "y": 10.6
    },
    {
        "x": 15,
        "y": 10.7
    },
    {
        "x": 14,
        "y": 10.8
    },
    {
        "x": 17.1,
        "y": 14.5
    },
    {
        "x": 13.6,
        "y": 9.6
    },
    {
        "x": 16.8,
        "y": 9.1
    },
    {
        "x": 19.7,
        "y": 14.2
    },
    {
        "x": 15.6,
        "y": 11.5
    },
    {
        "x": 14.8,
        "y": 12.3
    },
    {
        "x": 15.6,
        "y": 9.5
    },
    {
        "x": 15.6,
        "y": 9.1
    }
];

//Find the point which is at least distance with other points
function findMinDistancePoint(cordinates) {
    //Min distance of point with other points
    var minDistance = 0;
    //Index of min distance point
    var minDistanceIndex = 0;
    for (let i = 0; i < cordinates.length; i++) {
        let distance = 0;
        for (let j = 0; j < cordinates.length; j++) {
            distance += calculateDistance(cordinates[j].x, cordinates[i].x, cordinates[j].y, cordinates[i].y);
        }
        if (distance < minDistance || minDistance == 0) {
            minDistance = distance;
            minDistanceIndex = i;
        }
    }

    return minDistanceIndex;
}
//Calculate the maximum zombie which will be dead by the dragon fire
function calculateDeadZombie(cordinates, minDistanceIndex) {
    //Least distance point from which circle of 5m to be drawn
    var cordinate = cordinates[minDistanceIndex];
    var noOfDeadZombie = 0;
    for (let i = 0; i < cordinates.length; i++) {
        if (calculateDistance(cordinate.x, cordinates[i].x, cordinate.y, cordinates[i].y) <= 2.5) {
            noOfDeadZombie += 1;
        }
    }
    return noOfDeadZombie + 1;
}
//Calculate the distance between two points
function calculateDistance(x1, x2, y1, y2) {
    var X = Math.pow((x2 - x1), 2);
    var Y = Math.pow((y2 - y1), 2);

    return Math.sqrt(X + Y);
}

//Method signature main method
(function burnThemAll(zombies) {
    var deadZombies = calculateDeadZombie(zombies, findMinDistancePoint(zombies));
    console.log(deadZombies);
})(zombies);