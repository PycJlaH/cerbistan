var x = 1;
  
   function votes() { 
    x = x + 1;
   document.getElementById("votes").innerHTML= x +" SuPeR";
if(x>5){
document.getElementById("votes").innerHTML= x + " SuPeR" + 
'<h5 style=" color: green;"><br>Ai da-ma drecu, chiar asa de bun sunt ?</h5> ';
}
     if(x>10){
document.getElementById("votes").innerHTML= x + " SuPeR" + 
'<h5 style=" color: green;"><br>Un pahar de jin pentru asa apreciere!!</h5> ';
}
     if(x>20){
document.getElementById("votes").innerHTML= x + " SuPeR" + 
'<h5 style=" color: green;"><br>Good stuff!!</h5> ';
}
     if(x>50){
document.getElementById("votes").innerHTML= x + " SuPeR" + 
'<h5 style=" color: green;"><br>Uvajuha!!</h5> ';
}
      if(x>75){
document.getElementById("votes").innerHTML= x + " SuPeR" + 
'<h5 style=" color: green;"><br>Wow ce tare esti! Respect!!</h5> ';
}
      if(x>100){
document.getElementById("votes").innerHTML= x + " SuPeR" + 
'<h5 style=" color: green;"><br>Pasiba bolisoe da ajunge, variante nu mai am!</h5> ';
}
}
function vvotes() {
x = x - 1;
document.getElementById("votes").innerHTML= x +" SuPeR";
if(x<0){
document.getElementById("votes").innerHTML= x + " SuPeR" + 
'<h5 style="color: green;"><br> Si ai ahuit blea? ?</h5> ';
}
  if(x<-5){
document.getElementById("votes").innerHTML= x + " SuPeR" + 
'<h5 style="color: green;"><br> Ai belit pula !!</h5> ';
   }
  if(x<-10){
document.getElementById("votes").innerHTML= x + " SuPeR" + 
'<h5 style="color: green;"><br> Te fut in cur!!</h5> ';
   }
  if(x<-15){
document.getElementById("votes").innerHTML= x + " SuPeR" + 
'<h5 style="color: green;"><br> Tu la halloween nu porti masca!!</h5> ';
   }
  if(x<-20){
document.getElementById("votes").innerHTML= x + " SuPeR" + 
'<h5 style="color: green;"><br> Chizda / Chizdon</h5> ';
   }
  if(x<-50){
document.getElementById("votes").innerHTML= x + " SuPeR" + 
'<h5 style="color: green;"><br> Sa ma sugi la coaie!!</h5> ';
   }
  if(x<-75){
document.getElementById("votes").innerHTML= x + " SuPeR" + 
'<h5 style="color: green;"><br> Unde te-am prins acolo te-am zaibit!</h5> ';
   }
  if(x<-100){
document.getElementById("votes").innerHTML= x + " SuPeR" + 
'<h5 style="color: green;"><br> Ajunge blea, variante nu mai am!</h5> ';
   }
}
function log() {
var username, password;
username = document.getElementById("username").value;
password = document.getElementById("password").value;
var username1, password1;
username1 = "admin";
password1 = "cerbi";
if(username==username1 && password==password1){
document.getElementById("link").href = "./home.html";
}else{
window.alert('Parola sau Login gresit');
}
}
