// Mars Rover: A CodeKata implementation by Muhammed Mutahr
// To develop an api that moves a rover around a grid
// Rover recieves a starting point (x, y), a direction it is facing (N, S, E, W), and a character array of commands.
// A function to move rover forward or backward (f, b)
// A function to change direction (l, r)
// Functionality for wrapping  from one edge of the grid to another. 
// Obstacle detection, if a given sequence of commands encounters an obstacle, 
//      the rover moves up to the last possible point and reports the obstacle.

function marsRover (locationArray, direction, charArray) {
    // iterate over the character array of commands
    // if character is an 'f' or a 'b' call the move function (passing character and direction)
    // if the character is a 'l' or 'r' call turn function (passing character and direction)
    // when iteration is complete return final location
}

function move (charCommand, direction) {
    // need to check the command and the direction
    // if the command is forward and facing N then we check for obstacle and increment Y coordinate
    // if the command is forward and facing S then we check for obstacle and  decrement the Y coordinate
    // if the command is forward and facing E then we check for obstacle and  increment the X coordinate
    // if the command is forward and facing W then we check for obstacle and  decrement the X coordinate

    // if the command is backward and facing N then we check for obstacle and decrement Y coordinate
    // if the command is backward and facing S then we check for obstacle and  increment the Y coordinate
    // if the command is backward and facing E then we check for obstacle and  decrement the X coordinate
    // if the command is backward and facing W then we check for obstacle and  increment the X coordinate

    // check if the location has an obstacle
    // if it does return current position otherwise continue
}

function turn (charCommand, direction) {
    // check which direction you are currently in 
    // change directions based on command 
    // return new direction
}

function obstacleCheck (possibleLoc) {
    // check if the next possible location has an obstacle
    // if there is an obstacle return with the possibleLoc as the obstacle location
} 