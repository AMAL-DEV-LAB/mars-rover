// Mars Rover: A CodeKata implementation by Muhammed Mutahr
// To develop an api that moves a rover around a grid
// Rover recieves a starting point (x, y), a direction it is facing (N, S, E, W), and a character array of commands.
// A function to move rover forward or backward (f, b)
// A function to change direction (l, r)
// Functionality for wrapping  from one edge of the grid to another. 
// Obstacle detection, if a given sequence of commands encounters an obstacle, 
//      the rover moves up to the last possible point and reports the obstacle.

$( document ).ready(function() {
    //marsRover([0,0], 'N', ['f']);
    var location = [0,0];
    var obstacle = [-1, 1];
    var direction = 'N';
    marsRover(location, direction, ['f', 'l', 'f', 'r', 'b'], obstacle);
});

function marsRover(locationArray, direction, charArray, obstacle) {
    // iterate over the character array of commands

    for (var i = 0; i < charArray.length; i++) {
        // if character is an 'f' or a 'b' call the move function (passing character and direction)
        if (charArray[i] == 'f' || charArray[i] == 'b' ) {
            if(!move(charArray[i], direction, locationArray, obstacle)) {
                return;
            }
        } else {
            // if the character is a 'l' or 'r' call turn function (passing character and direction)
            direction = turn(charArray[i], direction); 
            console.log(direction);
        }
     }
     
     console.log(locationArray);
    // when iteration is complete return final location
}

function move (charCommand, direction, locationArray, obstacle) {
    var xMove = 0; var yMove = 0; 
    // need to check the command and the direction
    if (charCommand == 'f') {
        switch (direction) {
            // if the command is forward and facing N then we check for obstacle and increment Y coordinate
            case "N":
                // increment Y location
                yMove++;
                break;
            // if the command is forward and facing S then we check for obstacle and  decrement the Y coordinate
            case "S":
                // decrement Y location
                yMove--;
                break;
            // if the command is forward and facing E then we check for obstacle and  increment the X coordinate
            case "E":
                // incrememnt X location
                xMove++;
                break;
            // if the command is forward and facing W then we check for obstacle and  decrement the X coordinate
            case "W":
                // decrement x location
                xMove--;
                break;
            default:
                console.log("No direction given.");
        }
    } else if (charCommand == 'b') {
        switch (direction) {
            // if the command is backward and facing N then we check for obstacle and decrement Y coordinate
            case "N":
                // decrement Y location
                yMove--;
                break;
            // if the command is backward and facing S then we check for obstacle and  increment the Y coordinate
            case "S":
                // increment Y location
                yMove++;
                break;
            // if the command is backward and facing E then we check for obstacle and  decrement the X coordinate
            case "E":
                // decrement X location
                xMove--;
                break;
            // if the command is backward and facing W then we check for obstacle and  increment the X coordinate
            case "W":
                // increment x location
                xMove++;
                break;
            default:
                console.log("No direction given.");
        }
    }

    var nextLocation = [locationArray[0] + xMove, locationArray[1] + yMove];
    if(!obstacleCheck(nextLocation, obstacle)) {
        var message = "Obstacle encountered at: " + nextLocation 
        + " rover ended at " + locationArray; 
        console.log(message);
        return false; 
    } else {
        locationArray[0] += xMove;
        locationArray[1] += yMove;
        var message = "Rover moved to " + locationArray + "."; 
    }

    console.log(message);
    return true;

    // check if the location has an obstacle
    // if it does return current position otherwise continue
}

function turn (charCommand, direction) {
    // check the command 
    if (charCommand == 'l') {
        switch (direction) {
            // if the direction is N turning left faces W
            case "N":
                direction = 'W';
                break;
            // if the direction is S turning left faces E
            case "S":
                direction = 'E';
                break;
            // if the direction is E turning left faces N
            case "E":
                direction = 'N';
                break;
            // if the direction is W turning left faces S
            case "W":
                direction = 'S';
                break;
            default:
                console.log("No direction given.");
        }
    } else if (charCommand == 'r') {
        switch (direction) {
            // if the direction is N turning right faces E
            case "N":
                direction = 'E';
                break;
            // if the direction is S turning right faces W
            case "S":
                direction = 'W';
                break;
            // if the direction is E turning right faces S
            case "E":
                direction = 'S';
                break;
            // if the direction is W turning right faces N
            case "W":
                direction = 'N';
                break;
            default:
                console.log("No direction given.");
        }
    }
    return direction; 
    // check which direction you are currently in 
    // change directions based on command 
    // return new direction
}

function obstacleCheck (possibleLoc, obstacleLoc) {
    // check if the next possible location has an obstacle
    if (possibleLoc.toString() == obstacleLoc.toString()){
        return false;
    }
            
    return true; 
} 