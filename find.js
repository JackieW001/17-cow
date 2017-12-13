var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//var targetX = boxWidth / 2;
//var targetY = boxHeight / 2;

var getRandomInt = function(max){
    return Math.floor(Math.random()*max);
}

//randomize later
var targetX = getRandomInt(boxWidth);
var targetY = getRandomInt(boxHeight);

console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    /* YOUR IMPLEMENTATION */
    var retVal = Math.sqrt(Math.pow((x0-x1), 2) + Math.pow((y0-y1), 2));
    return retVal;
};


var findIt = function(e) {
    var dist = Math.floor(distance(e.clientX, e.clientY, targetX, targetY));
    dist = 255-dist;
    var hexString = dist.toString(16).toUpperCase();
    console.log(dist);
    box.style.backgroundColor = "rgb(" + dist + "," + dist + "," + dist + ")";

    if (dist > 230) {
	alert("YOU FOUND ME!");
    }

};

/*
your OTHER FXNS

*/

box.addEventListener("mousemove", findIt);

