// DECLARACION DE VARIABLES
let card1     = document.querySelector(".card1");
let card2     = document.querySelector(".card2");
let btn1      = document.querySelector (".btn");

// cambiando style a card1 y card2
card1.style.backgroundColor=	"#7ba238";
card2.style.backgroundColor=	"white";


// cambiando style al boton calcular
document.getElementById("id-btn").style.width = "150px";
document.getElementById("id-btn").style.height= "30px";
document.getElementById("id-btn").style.backgroundColor="#FF7F50";
document.getElementById("id-btn").style.textAlign="center";
document.getElementById("id-btn").style.color="navy";
document.getElementById("id-btn").style.fontWeight="bold";


function calcular(){
  let precio   = 400000 // precio del producto
  let cantidad = document.getElementById("idCantidad");
  let vcolor   = document.getElementById("idColor");
  document.getElementById("idTotal").innerHTML     = 'Total    : $ ' + Number(precio * cantidad.value); 
  document.getElementById("idCantidad2").innerHTML = 'Cantidad :   ' + cantidad.value; 
  document.getElementById("idColor2").style.backgroundColor = vcolor.value;

  document.getElementById("idCantidad").value = "";
  document.getElementById("idColor").value = "";
}
