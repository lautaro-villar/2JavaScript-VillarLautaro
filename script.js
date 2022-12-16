 alert("Bienvenido a mi fixture del mundial!")
let opciones = prompt(" Ingrese 1 para ver las fases de grupos \n Ingrese 2 para ver la actualidad de los partidos") 

function  Equipos( letra, Grupo, EquipoClasificado, PuntosEquipoClasificado ) {

this.letra  = letra
this.Grupo = Grupo
this.EquipoClasificado = EquipoClasificado
this.PuntosEquipoClasificado = PuntosEquipoClasificado

}


// Equipos
 const Grupo = [
    new Equipos("A" , " 1) Paises bajos \n 2) Senegal \n 3) Ecuador \n 4) Qatar \n " , " Paises Bajos \n  Senegal \n " , " Paises Bajos: 7 \n Senegal: 6 \n "  )  ,
    new Equipos("B" , " 1) Inglaterra \n 2) Estados Unidos \n 3) Iran \n 4) Gales \n " , "Inglaterra \n Estados Unidos \n " , " Inglaterra: 7 \n Estados Unidos: 5 \n "  ) , 
    new Equipos("C" , " 1) Argentina \n 2) Polonia \n 3) Mexico \n 4) Arabia Saudita \n " , " Argentina \n  Polonia \n " , " Argentina: 6 \n Polonia: 4 \n "  )  ,
    new Equipos("D" , " 1) Francia \n 2) Australia \n 3) Tunez \n 4) Dinamarca \n ", "Francia \n Australia \n " , " Francia: 6 \n Australia: 6 \n ") ,
    new Equipos("E" , " 1) Japon \n 2) España \n 3) Alemania \n 4) Costa Rica \n " , " Japon \n España " ,  " Japon: 6 \n España: 4 \n "  ) ,
    new Equipos("F" , " 1) Marruecos \n 2) Croacia \n 3) Belgica \n 4) Canada \n " , " Marruecos \n Croacia " ,  " Marruecos: 7 \n Croacia: 5 \n "  ) ,
    new Equipos("G" , " 1) Brasil \n 2) Suiza  \n 3) Camerun \n 4) Serbia \n " , " Brasil \n suiza " ,  " Brasil: 6 \n Suiza: 6 \n "  ) ,
    new Equipos("H" , " 1) Portugal \n 2) Corea Del Sur \n 3) Uruguay \n 4) Ghana \n " , " Portugal \n Corea Del Sur " ,  " Portugal: 6 \n Corea Del Sur: 4 \n "  ) ,
]
//Equipos 

// Primera opcion
let primeraOpcion = "1"
let ValorEncontrado
let informacion
if (opciones == primeraOpcion) {
   letra = prompt(
      "Ingrese un Grupo:\n A \n B \n C \n D \n E \n F \n G \n H \n  "
   );
   ValorEncontrado = Grupo.find((grupo) => grupo.letra == letra.toUpperCase());
}

if(ValorEncontrado)
{
   informacion = parseInt(prompt(`Que deseas conocer? \n 1) Integrantes \n 2)Clasificados \n 3)Puntuacion \n`))

   if(informacion == 1){
      alert(`${ValorEncontrado.Grupo}`)

   }else if (informacion == 2) {
    alert(ValorEncontrado.EquipoClasificado)

   }else if (informacion == 3) {
    alert(ValorEncontrado.PuntosEquipoClasificado)
   }
   }
 // Primera opcion 

// Segunda opcion 
let SegundaOpcion = "2"

if (opciones == SegundaOpcion) {
    alert("Argentina vs Francia")
}
// Segunda opcion 




 






 
