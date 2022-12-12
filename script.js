 alert("Bienvenido a mi fixture del mundial!")
let opciones = prompt("ingrese 1 para ver las fases de grupos \n ingrese 2 para ver la actualidad de los partidos") 

function equipos( Grupo, EquipoClasificado, PuntosEquipoClasificado ) {

this.Grupo = Grupo
this.EquipoClasificado = EquipoClasificado
this.PuntosEquipoClasificado = PuntosEquipoClasificado

}

const GrupoA = new equipos(" 1) paises bajos \n 2) senegal \n 3) ecuador \n 4) qatar \n " , "clasifico \n clasifico \n no clasifico \n no clasifico" , "7 \n 6 \n 4 \n 0 \n"  );
const GrupoB = new equipos(" 1) Inglaterra \n 2) Estados Unidos \n 3) Iran \n 4) gales \n " , "clasifico \n clasifico \n no clasifico \n no clasifico" , "7 \n 5 \n 3 \n 1 \n"  );
const GrupoC = new equipos(" 1) paises bajos \n 2) senegal \n 3) ecuador \n 4) qatar \n " , "clasifico \n clasifico \n no clasifico \n no clasifico" , "6 \n 4 \n 4 \n 3 \n"  );
const GrupoD = new equipos(" 1) paises bajos \n 2) senegal \n 3) ecuador \n 4) qatar \n " , "clasifico \n clasifico \n no clasifico \n no clasifico" , "6 \n 6 \n 4 \n 1 \n"  );
const GrupoE = new equipos(" 1) paises bajos \n 2) senegal \n 3) ecuador \n 4) qatar \n " , "clasifico \n clasifico \n no clasifico \n no clasifico" , "6 \n 4 \n 4 \n 3 \n"  );
const GrupoF = new equipos(" 1) paises bajos \n 2) senegal \n 3) ecuador \n 4) qatar \n " , "clasifico \n clasifico \n no clasifico \n no clasifico" , "7 \n 5 \n 4 \n 0 \n"  );
const GrupoG = new equipos(" 1) paises bajos \n 2) senegal \n 3) ecuador \n 4) qatar \n " , "clasifico \n clasifico \n no clasifico \n no clasifico" , "6 \n 6 \n 4 \n 1 \n"  );
const GrupoH = new equipos(" 1) paises bajos \n 2) senegal \n 3) ecuador \n 4) qatar \n " , "clasifico \n clasifico \n no clasifico \n no clasifico" , "6 \n 4 \n 4 \n 3 \n"  );


let primeraOpcion = "1"

if (opciones == primeraOpcion) {
    prompt("ingrese un Grupo:\n A \n B \n C \n D \n E \n F \n G \n H \n  ") 
  
}


alert(GrupoA)




 
