
var randomnumber1 = Math.floor(Math.random() * 6 +1)
var randomnumber2 = Math.floor(Math.random() * 6 +1)

var imgName = "dice"+randomnumber1+".png";
var imgName2 = "dice"+randomnumber2+".png";

document.querySelector(".img1").setAttribute("src","./images/"+imgName);
document.querySelector(".img2").setAttribute("src","./images/"+imgName2);

if(randomnumber1 > randomnumber2){
  document.querySelector("h1").innerHTML = "⛳ Player 1 Wins"
}else if(randomnumber1 < randomnumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins ⛳"
}else{
  document.querySelector("h1").innerHTML = "Draws"
}
