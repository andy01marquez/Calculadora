

var x="0";
var x_borrar=1;
var coma=0;
var op="no";
var valor = 0;
var num=0;

pantalla=document.getElementById("textoPantalla"); 

function numero(value) { 
   if (x=="0" || x_borrar==1  ) 
   { 
   pantalla.innerHTML=value; 
   x=value; 

   if (value==".") 
   { 
      pantalla.innerHTML="0."; 
      x=value;
      coma=1;
   }

  }

  else 
  { 
      if (value=="." && coma==0) 
      { 
          pantalla.innerHTML+=value;
          x+=value;
          coma=1;
      }
    
      else if (value=="." && coma==1) 
      {

      } 
   	 
      else 
      {
          pantalla.innerHTML+=value;
          x+=value;
      } 
   }
   x_borrar=0; 
}

function operacion(tipo) 
{
   ni=x;
   op=tipo;
   x_borrar=1;
}	

function igual() 
{
   if (op=="no") 
   {
      pantalla.innerHTML=x;	
   }
   
   else 
   { 
      op=ni+op+x; 
      resultado = eval(op);
      pantalla.innerHTML = resultado;
      x=sol; 
      op="no"; 
      x_borrar=1;
   }       
}

function c() 
{
   pantalla = document.getElementById('textoPantalla');
   pantalla.innerHTML = "0";
   x_borrar=1;
}
