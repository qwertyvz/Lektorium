var spiralMatrix = function(R, C, r0, c0) {

    const DIRECTION = {
        UP: 'up',
        DOWN: 'down',
        LEFT: 'left',
        RIGHT: 'right'
    }

    let direction = DIRECTION.RIGHT;
        result = [],
        r = r0,
        c = c0,
        rightWall = c+1,
        bottomWall = r+1,
        leftWall = c-1,
        topWall = r-1,
        i = 0;

    while(result.length < R*C) {

        let insideGrid = (c > -1 && c < C) && (r > -1 && r < R)
        if(insideGrid) {
          result[i] = [r,c];
          i++;
        }

        if(direction === DIRECTION.RIGHT) {
            let touchingRightWall = c === rightWall;
            if(touchingRightWall) {
                rightWall++;
                direction = DIRECTION.DOWN;
            } else {
                c++;
            }
        }
        if(direction === DIRECTION.DOWN) {
            let touchingBottomWall = r === bottomWall;
            if(touchingBottomWall) {
                bottomWall++;
                direction = DIRECTION.LEFT;
            } else {
                r++;
            }
        }
        if(direction === DIRECTION.LEFT) {
            let touchingLeftWall = c === leftWall;
            if(touchingLeftWall) {
                leftWall--;
                direction = DIRECTION.UP;
            } else {
                c--;
            }
        }
        if(direction === DIRECTION.UP) {
            let touchingTopWall = r === topWall;
            if(touchingTopWall) {
                topWall--;
                direction = DIRECTION.RIGHT;
                c++;
            } else {
                r--;
            }
        }
    }
    return result;
};

console.log(spiralMatrix(1,4,0,0));
console.log(spiralMatrix(5,6,1,4));
