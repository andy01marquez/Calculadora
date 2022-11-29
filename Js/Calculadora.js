

var x="0";
var borrar=1;
var coma=0;
var op="no";
var valor = 0;
var num=0;

pantalla=document.getElementById("textoPantalla"); 

function numero(value) { 
   if (x=="0" || borrar==1) 
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
   borrar=0; 
}

function operacion(tipo) 
{
   num=x;
   op=tipo;
   borrar=1;
}	

function igual() 
{
   if (op=="no") 
   {
      pantalla.innerHTML=x;	
   }
   
   else 
   { 
      op=num+op+x; 
      resultado = eval(op);
      pantalla.innerHTML = resultado;
      x=resultado; 
      op="no"; 
      borrar=1;
   }       
}

function c() 
{
   pantalla = document.getElementById('textoPantalla');
   pantalla.innerHTML = "0";
   coma=0;
   x= "0";
   op="no"
   borrar=1;
}

function ce() 
{
   pantalla.innerHTML = 0; 
   x=0;
   coma=0; 			
}

function raiz()
{
   num = Number (x);
   raiz_op = Math.sqrt(num);
   resultado = String(raiz_op); 
   pantalla.innerHTML=resultado; 
   op="no"; 
   borrar = 1;
}
function porce() 
{ 
   resultado = x/100; 
   pantalla.innerHTML = resultado;
   borrar = 1; 
}
function opues() 
{ 
   num_inv=Number(x); 
   num_inv=-num_inv; 
   resultado = String(num_inv);
   pantalla.innerHTML = resultado; 
}
