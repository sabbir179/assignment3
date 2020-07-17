// Task - 1:  feet to mile conversion 

function feetToMile(feet){
    var mile = feet *  0.00018939;
    return mile;
}

var convert = feetToMile(100);
console.log(convert);



// Task - 2: Wood calculator
// 1 chair = 1 cubic feet; 1 table = 3 cubic feet; 1 bed = 5 cubic feet;

function woodCalculator(chair, table, bed){
    var countChair = chair * 1;
    var countTable = table * 3;
    var countBed = bed * 5; 
    var totalWood = countChair + countTable + countBed; 
    return totalWood;
}

var total = woodCalculator(5, 23, 5);
console.log("Total number of wood need: " + total + " cubic feet");




// Task - 3: Brick calculator 
// 1st - 10th floor height is 15 ft ; 11th to 20th floor height is 12 ft and 21st to above floor height is 10ft
// per ft needs 1000 bricks.

function brickCalculator(floor){
    if (floor <=10){
        var feet = floor * 15;
        var countBrick = feet * 1000;
        var totalBrick = countBrick;
    }
    else if( floor > 10 && floor <=20){
        var feet1 = floor * 12;
        var countBrick1 = feet1 * 1000;
        var totalBrick = countBrick + countBrick1;
    }
    else {
        var feet2 = floor * 10;
        var countBrick2 = feet2 * 1000;
        var totalBrick = countBrick + countBrick1 + countBrick2;
    }
return totalBrick;
}



// Task - 4: TinyFriend

function tinyFriend(arr) {
    let shortLength = Infinity;
    let shortest = "";

    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'string' && arr[i].length < shortLength) {
                shortest = arr[i];
                shortLength = arr[i].length;
            }
        }
    }

    return shortest;
}

var output = tinyFriend(['Samiul', 'Arif', 'Mahzabeen', 'Sab']);
console.log(output);