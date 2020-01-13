var x = 1;
  
   function votes() { 
    x = x + 1;
   document.getElementById("votes").innerHTML= x +" SuPeR";
if(x>15){
document.getElementById("votes").innerHTML= x + "SuPeR" + 
'<h5 style=" color: green;"><br>Ai da-ma drecu, chiar asa de bun sunt ?</h5> ';
}
}
function vvotes() {
x = x - 1;
document.getElementById("votes").innerHTML= x +" SuPeR";
if(x<-1){
document.getElementById("votes").innerHTML= x + " SuPeR" + 
'<h5 style="color: green;"><br> Si ai ahuit blea? ?</h5> ';
}
   }
