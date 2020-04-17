//WEBPAGE: https://www.miniclip.com/games/8-ball-pool-multiplayer/en/focus/
if (!(window.location.href.includes("miniclip.com/games/8-ball-pool-multiplayer/en/focus"))) {
  if (confirm("The overlay is made for the 'focus' webpage of the game, would you like to be redirected there?")) {
    window.open("https://www.miniclip.com/games/8-ball-pool-multiplayer/en/focus/");
  }
}

//miniclip-8BallPool-maximizer(remove unnecessary, zoom & center)
document.getElementsByClassName("sky-wrapper")[0].remove();
document.getElementById("site-header").remove();
document.getElementById("pool-menu-after").remove();
document.getElementsByClassName("tools")[0].remove();
document.getElementsByClassName("tools")[1].remove();

document.getElementById("iframe-game").contentWindow.document.getElementById("container").style.margin="0px";
document.getElementById("game-embed").style.height=window.innerHeight+"px";
document.getElementById("game-embed").style.width=window.innerWidth+"px";
document.getElementsByClassName("expert-game")[0].style="padding-right:0;"
document.body.style.overflow="hidden";
document.getElementById("game-container").style="margin:0 !important; transform-origin:0px 0px; transform:scale("+Math.min(screen.width/document.getElementById("iframe-game").contentWindow.document.getElementById("container").style.width.replace("px",""), (window.outerHeight-100)/document.getElementById("iframe-game").contentWindow.document.getElementById("container").style.height.replace("px",""))+");";

if (screen.width/document.getElementById("iframe-game").contentWindow.document.getElementById("container").style.width.replace("px","")>(window.outerHeight-100)/document.getElementById("iframe-game").contentWindow.document.getElementById("container").style.height.replace("px",""))
	document.getElementById("iframe-game").contentWindow.document.getElementById("container").style.margin="auto";

//LINES(6)
var img = [document.createElement("img"),document.createElement("img"),document.createElement("img"),document.createElement("img"),document.createElement("img"),document.createElement("img")];
for (i=0;i<6;i++) {img[i].src="https://i.imgur.com/xw6JgO4.png";
	            	   img[i].style="position:absolute; z-index:1000; pointer-events:none; opacity:0.6;";
		               img[i].className="imgClass";
		               document.getElementById("iframe-game").contentWindow.document.getElementById("canvas-container").appendChild(img[i]);}
img[0].src="https://i.imgur.com/ZR6HKLB.png";

//ROTATEABLE
var rot=[0,0,0,0,0,0];
var pozPocket=[[169,259],[577,243],[985,259],[169,652],[577,668],[985,652]];
var var0180;
function rotFct() {
	for (i=0;i<=3;i+=3) {rot[i]=0+Math.atan((y+14-pozPocket[i][1])/(x+134-pozPocket[i][0]))*180/Math.PI;}
	for (i=2;i<=5;i+=3) {rot[i]=180+Math.atan((y+14-pozPocket[i][1])/(x+134-pozPocket[i][0]))*180/Math.PI;}
	if (x+134>=pozPocket[1][0]) {var0180=0;} else {var0180=180;}
	for (i=1;i<=4;i+=3) {rot[i]=var0180+Math.atan((y+14-pozPocket[i][1])/(x+134-pozPocket[i][0]))*180/Math.PI;}
	for (i=0;i<6;i++) {document.getElementById("iframe-game").contentWindow.document.getElementsByClassName("imgClass")[i].style.transform="rotate("+rot[i]+"deg)";}
}

//MOVABLE
var x=0,y=pozPocket[1][1]+50,m=10;
$(document).keydown(function(event){ //0numpad, arrowKeys(left, up, right, down)
	if (event.which==96) {if (m==10) m=1; else m=10;}
	else if (event.which==37) x-=m;
	else if (event.which==38) y-=m;
	else if (event.which==39) x+=m;
	else if (event.which==40) y+=m;
	for (i=0;i<6;i++) {document.getElementById("iframe-game").contentWindow.document.getElementsByClassName("imgClass")[i].style.left = x+"px"; document.getElementById("iframe-game").contentWindow.document.getElementsByClassName("imgClass")[i].style.top = y+"px";}
	if (x+134<pozPocket[0][0]-20 || x+134>pozPocket[2][0]+20 || y+14<pozPocket[1][1]-20 || y+14>pozPocket[4][1]+20) {document.getElementById("iframe-game").contentWindow.document.getElementsByClassName("imgClass")[0].src="https://i.imgur.com/PrVJdEe.png"; document.getElementById("iframe-game").contentWindow.document.getElementsByClassName("imgClass")[0].style.transform="rotate(0deg)"; for (i=1;i<6;i++) document.getElementById("iframe-game").contentWindow.document.getElementsByClassName("imgClass")[i].style.visibility="hidden";}
	else {rotFct(); document.getElementById("iframe-game").contentWindow.document.getElementsByClassName("imgClass")[0].src="https://i.imgur.com/ZR6HKLB.png"; for (i=1;i<6;i++) document.getElementById("iframe-game").contentWindow.document.getElementsByClassName("imgClass")[i].style.visibility="visible";}	
	//console.log("x:"+(x+134)+" y:"+(y+14));
});

for (i=0;i<6;i++) {document.getElementById("iframe-game").contentWindow.document.getElementsByClassName("imgClass")[i].style.left = x+"px"; document.getElementById("iframe-game").contentWindow.document.getElementsByClassName("imgClass")[i].style.top = y+"px";}
rotFct();
