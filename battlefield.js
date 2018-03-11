var zombies = [{
        x: 9.5,
        y: 10.1
    }, {
        x: 50,
        y: 2.8
    },

    {
        x: 19.6,
        y: 12.5
    }, {
        x: 22.3,
        y: 10
    },
    {
        x: 23.8,
        y: 28.5
    }, {
        x: 24,
        y: 8.2
    },
    {
        x: 45.5,
        y: 32.1
    }, {
        x: 2.3,
        y: 5.5
    },
    {
        x: 13.7,
        y: 16.3
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
        if (calculateDistance(cordinate.x, cordinates[i].x, cordinate.y, cordinates[i].y) <= 5) {
            noOfDeadZombie += 1;
        }
    }
    return noOfDeadZombie;
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