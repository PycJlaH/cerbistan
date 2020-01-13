var x = 1;
  
   function votes() { 
    x = x + 1;
   document.getElementById("votes").innerHTML= x +" SuPeR";
     if(x>30){
document.getElementById("votes").innerHTML= "  Ai da-ma drecu, chiar asa de bun sunt ? ";
       document.getElementById("votess").innerHTML= "URAA";
}
   }
