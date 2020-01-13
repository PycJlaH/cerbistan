var x = 1;
  
   function votes() { 
    x = x + 1;
   document.getElementById("votes").innerHTML= x +" SuPeR";
if(x>10){
document.getElementById("votes").innerHTML= x + " SuPeR" + 
'<h5 style=" color: green;"><br>Ai da-ma drecu, chiar asa de bun sunt ?</h5> ';
}
     if(x>25){
document.getElementById("votes").innerHTML= x + " SuPeR" + 
'<h5 style=" color: green;"><br>Un pahar de jin pentru asa apreciere!!</h5> ';
}
}
function vvotes() {
x = x - 1;
document.getElementById("votes").innerHTML= x +" SuPeR";
if(x<-1){
document.getElementById("votes").innerHTML= x + " SuPeR" + 
'<h5 style="color: green;"><br> Si ai ahuit blea? ?</h5> ';
}
  if(x<-10){
document.getElementById("votes").innerHTML= x + " SuPeR" + 
'<h5 style="color: green;"><br> Ai belit pula !!</h5> ';
   }
}
