//feetToMile

function feetToMile(feet){
    var mile = feet * 0.000189394;
    var output = feet + " feet is equal to " + mile + " mile.";
    return output;
}

//woodCalculator

function woodCalculator(chair, table, bed){
    var totalWood = chair + table * 3 + bed * 5;
    var output = "You need " + totalWood + " cubic feet of wood.";
    return output;
}

//brickCalculator

function brickCalculator(floors){
    var totalBrick = 0;
    var brickArr = [];
    var output = "";
    if(floors <= 0){
        output = "Please enter another number.";
    }
    else{
        if(floors <= 10){
            brickArr.push(floors);
            totalBrick = brickArr[0] * 15 * 1000;
        }
        else if(floors <= 20){
            brickArr[0] = 10;
            brickArr[1] = floors - 10;
            totalBrick = brickArr[0] * 15 * 1000 + brickArr[1] * 12 * 1000;
        }
        else if(floors > 20){
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

function tinyFriend(friendArr){
    var tinyFriend = friendArr[0];
    var min = friendArr[0].length;
    for(var i = 1; i < friendArr.length; i++){
        if(friendArr[i].length < min){
            min = friendArr[i].length;
            tinyFriend = friendArr[i];
        }
    }
    var output = tinyFriend + " has the smallest name of length " + min;
    return output;
}