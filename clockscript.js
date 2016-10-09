window.onload=function(){
var dom=document.getElementById("clc");
var ctx=dom.getContext("2d");
var width=ctx.canvas.width;
var height=ctx.canvas.height;
var r=width/2;


function drawCicle(){
 ctx.save();
 ctx.translate(r,r);
 ctx.beginPath();
 ctx.arc(0,0,r-5,0,2*Math.PI,false);
 ctx.lineWidth=10;
 ctx.stroke();

 var number=[3,4,5,6,7,8,9,10,11,12,1,2];
 ctx.font="18px Arial";
 ctx.textAlign="center";
 ctx.textBaseline="middle";
 for(var i=0;i<12;i++){
 	var rad=2*Math.PI/12*i;
 	var x=Math.cos(rad)*(r-28);
 	var y=Math.sin(rad)*(r-28);
 	ctx.fillText(number[i],x,y);
 };

for(var i=0;i<61;i++){
	var rad=2*Math.PI/60*i;
	var x=Math.cos(rad)*(r-15);
	var y=Math.sin(rad)*(r-15);
	ctx.beginPath();
	if(i%5===0){
		ctx.fillStyle="black";
		ctx.arc(x,y,3,0,2*Math.PI,false);
	}else{
		ctx.fillStyle="grey";
		ctx.arc(x,y,2,0,2*Math.PI,false);
	};
	ctx.fill();
    };
}



function drawHour(hour,minute){
	ctx.save();
    ctx.beginPath();
    ctx.lineCap="round";
    ctx.lineWidth=6;
	ctx.rotate(2*Math.PI/12*hour+2*Math.PI/12/60*minute);
	ctx.moveTo(0,12);
	ctx.lineTo(0,-r+40);
	ctx.stroke();
    ctx.restore();
};
function drawMinute(minute){
	ctx.save();
    ctx.beginPath();
    ctx.lineCap="round";
    ctx.lineWidth=4;
	ctx.rotate(2*Math.PI/60*minute);
	ctx.moveTo(0,16);
	ctx.lineTo(0,-r+20);
	ctx.stroke();
    ctx.restore();
};
function drawSecond(second){
	ctx.save();
    ctx.beginPath();
    ctx.fillStyle="red";
	ctx.rotate(2*Math.PI/60*second);
	ctx.moveTo(0,20);
	ctx.lineTo(-3,10);
	ctx.lineTo(-1,-r+20);
	ctx.lineTo(1,-r+20);
	ctx.lineTo(3,10);
	ctx.fill();
    ctx.restore();
};
function drawDot(){
	ctx.beginPath();
	ctx.fillStyle="white",
	ctx.arc(0,0,5,0,2*Math.PI,false);
	ctx.fill();
};
    
function time(){
	ctx.clearRect(0,0,width,height);
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	drawCicle();
	drawDot();
	drawHour(h,m);
	drawMinute(m);
	drawSecond(s);
    ctx.restore();
};
setInterval(time,1000);

















}

