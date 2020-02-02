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
  if(x<-99){
document.getElementById("votes").innerHTML= x + " SuPeR" + 
'<h5 style="color: green;"><br> Ajunge blea, variante nu mai am!</h5> ';
   }
  if(x<-199){
document.getElementById("votes").innerHTML= x + " SuPeR" + 
'<h5 style="color: green;"><br> Luate-as in sex!!</h5> ';
   }
  if(x<-299){
document.getElementById("votes").innerHTML= x + " SuPeR" + 
'<h5 style="color: green;"><br> Din tine om ca din pula mea coada de lopata!</h5> ';
   }
  if(x<-399){
document.getElementById("votes").innerHTML= x + " SuPeR" + 
'<h5 style="color: green;"><br> Esti o laba trista!</h5> ';
   }
  if(x<-499){
document.getElementById("votes").innerHTML= x + " SuPeR" + 
'<h5 style="color: green;"><br> La pula ai Petrea, te-am vazut!</h5> ';
   }
  if(x<-599){
document.getElementById("votes").innerHTML= x + " SuPeR" + 
'<h5 style="color: green;"><br> Stii cat a tinut maicata cacatul in ea ? 9 luni :))!!</h5> ';
   }
  if(x<-699){
document.getElementById("votes").innerHTML= x + " SuPeR" + 
'<h5 style="color: green;"><br> Ai grija cand mergi pe langa caini, au obiceiuri de a manca cacat!!</h5> ';
   }
  if(x<-799){
document.getElementById("votes").innerHTML= x + " SuPeR" + 
'<h5 style="color: green;"><br> Hai sictir bai ciumpalaculei!</h5> ';
   }
  if(x<-899){
document.getElementById("votes").innerHTML= x + " SuPeR" + 
'<h5 style="color: green;"><br> Imi pare rau ca ai mai apasat de 100 de ori, dar pana aici cu imaginatia mea!!</h5> ';
   }
  if(x<-999){
    var e = new Date().getHours();
    var r = new Date().getMinutes();
document.getElementById("votes").innerHTML= x + " SuPeR" + 
'<h5 style="color: green;"><br> Tu chiar la ora "e" si "r" minute nu ai ce face?</h5> ';
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
function yes(){
window.alert('Multumesc, asa si credeam :D');
}
  function fugi(){
   var x =
 Math.floor(Math.random() * 10);

   var y =
 document.getElementById("fugi");
 if(x == 0){
   y.style.margin =  "75px 317px 0 17px";
}
 else if(x == 1){
  y.style.margin =  "117px 7px 427px";
}
 else if(x == 2){
 y.style.margin =  "17px 227px 0 32px";
}
else if(x == 3){
  y.style.margin =  "127px 32px 0 345px";
}
else if(x == 4){
  y.style.margin =  "102px 445px 0 38px";
}
else if(x == 5){
  y.style.margin =  "45px 28px 0 266px";
}
else if(x == 6){
  y.style.margin =  "138px 366px 0 70px";
}
else if(x == 7){
  y.style.margin =  "96px 470px 0 22px";
}
else if(x == 8){
  y.style.margin =  "70px 22px 0 275px";
}
else if(x == 9){
 y.style.margin =  "112px 75px 0 317px";
}
 }

