;(function(){

var Game = function(canvasId){
	var canvas = document.getElementById(canvasId);
	
	var ctx = canvas.getContext('2d');
	var gameSize = { x: canvas.width , y: canvas.height - 150 };
   	var self = this;
   	var points = [
    {color: "#000000", name: "salida", center : { x : 50, y : 50 }, size: { x:10,y:10 }},
    {color: "#000000", name: "bestia", center : { x : 700, y : 150 }, size: { x:10,y:10 }},
    {color: "#000000", name: "bifurcacion", center : { x : 150, y : 200 }, size: { x:10,y:10 }},
    {color: "#000000", name: "loro", center : { x : 50, y : 280 }, size: { x:10,y:10 }},
    {color: "#000000", name: "piedra", center : { x : 250, y : 200 }, size: { x:10,y:10 }},
    {color: "#000000", name: "viejo", center : { x : 400, y : 200 }, size: { x:10,y:10 }}
    ];
   // var player = new Player(points);
   var player = {
   	center : getPointByName("piedra", points).center, 
   	size: { x:15,y:80 },
   	color: "#770000",
   	moveToClick : function(e){
		var click = {x: e.pageX, y:e.pageY}
		var validLocations = [];
		for(var i=0; i < points.length; i++){
			validLocations.push(points[i].center);
		}
		for(var j=0; j < validLocations.length; j++){
			if(ctx.isPointInPath(click.x, click.y)){
				player.center = click;
			}else{
				player.center = click;
			}
		}
		
		console.log(click.x, click.y);
	}
   };
  
  canvas.addEventListener("mousedown", player.moveToClick, false);



   	var tick = function(){
		ctx.clearRect(0, 0, 800, 500);
		
		ctx.fillStyle = "#00F432";
		ctx.fillRect(0,0,800,500);

		self.drawInterface(ctx);
		for(var i=0; i < points.length; i++){
			drawObjects(ctx, points[i]);
		}
		drawObjects(ctx, player);
		requestAnimationFrame(tick);
	};

    tick();
	
	
    
};

Game.prototype = {
	drawInterface : function(ctx){
        ctx.fillStyle = "#000000";
        ctx.fillRect(0,350,800,1);
        console.log("Bienvenidos al mundo de Yawar");

	}

};


var Player = function(points){
	var position = getPointByName("piedra", points);
	var center = {x: 35, y:105};
	var size = {x: 15, y:15};

}

Player.prototype = {

}

var drawObjects = function(ctx,object){
	ctx.fillStyle = object.color;
   	ctx.fillRect(object.center.x - object.size.x/2, 
   	object.center.y - object.size.y/2, object.size.x, object.size.y);

};

var getPointByName = function(name, points){
	for(var i=0; i < points.length; i++){
        if(points[i].name == name){
        	return points[i]
        }
    }
    console.log("we got trouble in getting that point bitch...");

};




window.onload = function(){
	
	new Game("screen");
	

};



})();

