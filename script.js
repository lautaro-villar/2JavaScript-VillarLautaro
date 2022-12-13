 alert("Bienvenido a mi fixture del mundial!")
let opciones = prompt(" ingrese 1 para ver las fases de grupos \n ingrese 2 para ver la actualidad de los partidos") 

function  Equipos( letra, Grupo, EquipoClasificado, PuntosEquipoClasificado ) {

this.letra  = letra
this.Grupo = Grupo
this.EquipoClasificado = EquipoClasificado
this.PuntosEquipoClasificado = PuntosEquipoClasificado

}



/*const*/ const Grupo = [
    new Equipos("A" , " 1) paises bajos \n 2) senegal \n 3) ecuador \n 4) qatar \n " , " Paises Bajos \n  senegal \n " , "7 \n 6 \n "  )  ,
    new Equipos("B" , " 1) Inglaterra \n 2) Estados Unidos \n 3) Iran \n 4) gales \n " , "inglaterra \n EstadosUnidos \n " , "7 \n 5 \n "  ) , 
    new Equipos("C" , " 1) Argentina \n 2) polonia \n 3) mexico \n 4) arabia saudita \n " , " argentina \n  polonia \n " , "6 \n 4 \n "  )  ,
    new Equipos("D" , " 1) Francia \n 2) australia \n 3) tunez \n 4) dinamarca \n ", "francia \n australia \n " , " 6 \n 6 \n ") ,
    new Equipos("E" , " 1) japon \n 2) españa \n 3) alemania \n 4) costa rica \n " , " japon \n españa " ,  "6 \n 4 \n "  ) ,
    new Equipos("F" , " 1) marruecos \n 2) croacia \n 3) belgica \n 4) canada \n " , " marruecos \n croacia " ,  "7 \n 5 \n "  ) ,
    new Equipos("G" , " 1) brasil \n 2) suiza  \n 3) camerun \n 4) serbia \n " , " brasil \n suiza " ,  "6 \n 6 \n "  ) ,
    new Equipos("H" , " 1) portugal \n 2) corea del sur \n 3) uruguay \n 4) ghana \n " , " portugal \n corea del sur " ,  "6 \n 4 \n "  ) ,
    
]
let primeraOpcion = "1"
let ValorEncontrado; 
 if (opciones == primeraOpcion) {
    letra = prompt("Ingrese un Grupo:\n A \n B \n C \n D \n E \n F \n G \n H \n  ")
    Grupo.find(Grupo => Grupo.letra == "A")
    let ValorEncontrado = Grupo.find (grupo => grupo.letra == "A")
 }
/*console.log(valorEncontrado)
 
     {
  let LetraElegida = prompt("Elige la informacion que quieres tener sobre el grupo " + faseDeGrupos + "\n \n •equipos \n \n •equipo clasificado \n \n •puntos de los equipos clasificados")
 }*/



 






 
