/*
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

/* global Polymer */
(function () {
  'use strict';
  Polymer({
    is: 'mars-rover',
    properties: {
      directionMove: {
        type: Object,
        value: function () {
          return {
            N: {
              xMove: 0,
              yMove: 1
            },
            S: {
              xMove: 0,
              yMove: -1
            },
            E: {
              xMove: 1,
              yMove: 0
            },
            W: {
              xMove: -1,
              yMove: 0
            },
          }
        }
      },
      gridSize: {
        type: Array,
        value: [10, 10]
      },
      location: {
        type: Array,
        value: [0, 0]
      },
      direction: {
        type: String,
        value: 'N'
      },
      obstacle: {
        type: Array,
        value: [5, 7]
      },
      commands: {
        type: Array,
        value: ['f']
      },
      _directionArray: {
        type: Array,
        value: ['N', 'E', 'S', 'W']
      }
    },
    _rotateArray: function (arrayRotate, directionRotate) {
      arrayRotate.unshift.apply(arrayRotate, arrayRotate.splice(directionRotate, arrayRotate.length));
      return arrayRotate;
    },
    _marsRover: function () {
      // iterate over the character array of commands
      for (var i = 0; i < this.commands.length; i++) {
        // if character is an 'f' or a 'b' call the move function (passing character and direction)
        if (this.commands[i] == 'f' || this.commands[i] == 'b') {
          if (!this._move()) {
            return;
          }
        } else {
          // if the character is a 'l' or 'r' call turn function (passing character and direction)
          this.direction = this._turn();
        }
      }
    },
    _move: function () {
      var xMove = this.directionMove[this.direction].xMove; var yMove = this.directionMove[this.direction].yMove;
      if (this.direction == 'b') {
        xMove *= -1;
        yMove *= -1;
      }
      var nextLocation = [this.location[0] + xMove, this.location[1] + yMove];
      if (!this._obstacleCheck(nextLocation)) {
        this.message = "Obstacle encountered at: " + nextLocation
          + " rover ended at " + this.location;
        this.$.toast.open();
        return false;
      } else {
        this.set('location.' + '0', this.location[0] += xMove);
        this.set('location.' + '1', this.location[1] += yMove);
        this.message = "Rover moved to [" + this.location + "].";
        this.$.toast.open();
      }
      this.location = this._gridCheck(this.location);
      return true;
    },
    _turn: function () {
      var currentDirection;
      for (var i = 0; i < this._directionArray.length; i++) {
        if (this.direction == this._directionArray[i]) {
          if (this.commands == 'r') {
            //rotate right
            this._directionArray = this._rotateArray(this._directionArray, 1);
            currentDirection = this._directionArray[i];
          } else {
            //rotate left
            this._directionArray = this._rotateArray(this._directionArray, -1);
            currentDirection = this._directionArray[i];
          }
        }
      }
      // return new direction
      return currentDirection;
    },
    _obstacleCheck: function (possibleLoc) {
      // check if the next possible location has an obstacle
      if (possibleLoc.toString() == this.obstacle.toString()) {
        return false;
      }
      return true;
    },
    _gridCheck: function (nextLoc) {
      if (nextLoc[0] == this.gridSize[0]) {
        nextLoc[0] = nextLoc[0] * -1;
      }
      if (nextLoc[1] == this.gridSize[1]) {
        nextLoc[1] = nextLoc[1] * -1;
      }
      return nextLoc;
    }
  });
})();

