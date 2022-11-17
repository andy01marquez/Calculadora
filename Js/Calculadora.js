

var x="0";
var x1=1;
var coma=0;
var op="no";

pantalla = document.getElementById("textoPantalla");

function numero(xx) { 

if (x=="0" || xi==1  ) {	
    pantalla.innerHTML=xx; 
    x=xx; 
    if (xx==".") { 
       pantalla.innerHTML="0.";
       x=xx;
       coma=1; 

    if (xx=="." && coma==0) { 
           pantalla.innerHTML+=xx;
           x+=xx;
           coma=1; 
       }
      
    else if (xx=="." && coma==1) {
    
    } 
      
       else {
           pantalla.innerHTML+=xx;
           x+=xx
       }
    }
    xi=0 
 }
}