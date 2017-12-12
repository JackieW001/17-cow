var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    /* YOUR IMPLEMENTATION */
    var retVal = Math.sqrt(Math.pow((x0-x1), 2) + Math.pow((y0-y1), 2));
    return retVal;
};


var findIt = function(e) {
    /* YOUR IMPLEMENTATION */
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log(targetX);
    // console.log(targetY);
    var dist = distance(e.clientX, e.clientY, targetX, targetY);
    console.log(dist);
    var hexString = Math.floor(dist).toString(16);
    box.setAttribute("color", "#" + hexString);
};

/*
your OTHER FXNS

*/

box.addEventListener("mousemove", findIt);

