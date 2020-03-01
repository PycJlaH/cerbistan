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
'<h5 style="color: green;"><br> Tu chiar la ora '+ e +' si '+ r + ' minute nu ai ce face?</h5> ';
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

 function joc(){
var x, c, v, b, n;
x = Math.floor(Math.random()*10);
c = Math.floor(Math.random()*10);
v = Math.floor(Math.random()*10);
b = Math.floor(Math.random()*10);
n = Math.floor(Math.random()*10);
   
if(x==0){
x = "Max ";
} else if(x==1){
x = "Madulin ";
} else if(x==2){
x = "Pavel ";
} else if(x==3){
x = "Nicu ";
} else if(x==4){
x = "Ruslan ";
} else if(x==5){
x = "Marina Conovalu ";
} else if(x==6){
x = "Marina Luchian ";
} else if(x==7){
x = "Cristina ";
} else if(x==8){
x = "Nicoleta ";
} else if(x==9){
x = "Ana ";
}

if(c==0){
c = "bea ";
} else if(c==1){
c = "se fute ";
} else if(c==2){
c = "se calareste ";
} else if(c==3){
c = "mananca ";
} else if(c==4){
c = "pute ";
} else if(c==5){
c = "doarme ";
} else if(c==6){
c = "boraste ";
} else if(c==7){
c = "cade ";
} else if(c==8){
c = "se cufura ";
} else if(c==9){
c = "zboara ";
}

if(v==0){
v = "adanc ";
} else if(v==1){
v = "la greu ";
} else if(v==2){
v = "perfect ";
} else if(v==3){
v = "frumos ";
} else if(v==4){
v = "nebunatic ";
} else if(v==5){
v = "cu respect ";
} else if(v==6){
v = "prost ";
} else if(v==7){
v = "urat ";
} else if(v==8){
v = "ca pula ";
} else if(v==9){
v = "puternic ";
}

if(b==0){
b = "Max ";
} else if(b==1){
b = "Madulin ";
} else if(b==2){
b = "Pavel ";
} else if(b==3){
b = "Nicu ";
} else if(b==4){
b = "Ruslan ";
} else if(b==5){
b = "Marina Conovalu ";
} else if(b==6){
b = "Marina Luchian ";
} else if(b==7){
b = "Cristina ";
} else if(b==8){
b = "Nicoleta ";
} else if(b==9){
b = "Ana ";
}
   
   if(n==0){
n = "pe masa ";
} else if(n==1){
n = "in beci ";
} else if(n==2){
n = "in ocol ";
} else if(n==3){
n = "in pod ";
} else if(n==4){
n = "la merzincu ";
} else if(n==5){
n = "la prut ";
} else if(n==6){
n = "la hata lu Max ";
} else if(n==7){
n = "in pianii cvartal ";
} else if(n==8){
n = "in Obelgrad City ";
} else if(n==9){
n = "in copac ";
}
   
if(x==b){
  return false;
}
window.alert(x + c + v + n + 'cu ' + b);
}
function openNav() {
  document.getElementById("myNav").style.width = "95%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
