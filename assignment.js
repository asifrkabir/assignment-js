//feetToMile

function feetToMile(feet) {
    var output = "";
    if (feet < 0) {
        output = "Distance cannot be negative.";
    }
    else {
        var mile = feet * 0.000189394;
        output = feet + " feet is equal to " + mile + " mile.";
    }
    return output;
}



//woodCalculator

function woodCalculator(chair, table, bed) {
    var output = "";
    if (chair < 0 || table < 0 || bed < 0) {
        output = "Invalid input. Please enter another number.";
    }
    else {
        var totalWood = chair + table * 3 + bed * 5;
        output = "You need " + totalWood + " cubic feet of wood.";
    }
    return output;
}



//brickCalculator

function brickCalculator(floors) {
    var totalBrick = 0;
    var brickArr = [];
    var output = "";
    if (floors <= 0) {
        output = "Floors cannot be zero or negative.";
    }
    else {
        if (floors <= 10) {
            brickArr.push(floors);
            totalBrick = brickArr[0] * 15 * 1000;
        }
        else if (floors <= 20) {
            brickArr[0] = 10;
            brickArr[1] = floors - 10;
            totalBrick = brickArr[0] * 15 * 1000 + brickArr[1] * 12 * 1000;
        }
        else if (floors > 20) {
            brickArr[0] = 10;
            brickArr[1] = 10;
            brickArr[2] = floors - 20;
            totalBrick = brickArr[0] * 15 * 1000 + brickArr[1] * 12 * 1000 + brickArr[2] * 10 * 1000;
        }
        output = "Total bricks needed: " + totalBrick;
    }
    return output;
}



//tinyFriend

function tinyFriend(friendArr) {
    var output = "";
    if (friendArr.length == 0) {
        output = "The array is empty. Please enter another array.";
    }
    else {
        var tinyFriend = friendArr[0];
        var min = friendArr[0].length;
        for (var i = 1; i < friendArr.length; i++) {
            if (friendArr[i].length < min) {
                min = friendArr[i].length;
                tinyFriend = friendArr[i];
            }
        }
        output = tinyFriend + " has the smallest name of length " + min;
    }
    return output;
}

console.log(tinyFriend(["sam", "Mo", "Richard"]));