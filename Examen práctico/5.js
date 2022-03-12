
class Persona{
    nombre;
    apellido;
    edad;
    getDetalles(){
        console.log("la persona se llama "+this.nombre+" "+this.apellido+" y su edad es "+this.edad+" años.");
    }

    constructor(nombre,apellido,edad){
        this.nombre= nombre;
        this.apellido= apellido;
        this.edad=edad;
    }
   
}
class Jugador extends Persona{
    posición;
    getDetalles(){
        console.log("El jugador se llama "+this.nombre+" "+this.apellido+" y su edad es "+this.edad+" años y su posición es "+this.posición);
    }
    constructor(nombre,apellido, edad,posición){
        super(nombre,apellido,edad);
        this.posición= posición;
    }
}

class Entrenador extends Persona{
    añosDeExperiencia;
    idFederación;
    getDetalles(){
        console.log("El entrenador se llama "+this.nombre+" "+this.apellido+" y su edad es "+this.edad+" años, tiene "+this.añosDeExperiencia+" años de experiencia y su id de Federación es:"+this.idFederación);
    }
    constructor(nombre,apellido,edad,añosDeExperiencia,idFederación){
        super(nombre,apellido,edad);
        this.añosDeExperiencia= añosDeExperiencia;
        this.idFederación= idFederación;

    }
}
class Equipo {
    nombre;
    apellido;
    edad;
    posición;
    añosDeExperiencia;
    idFederación;
    constructor(director, arregloequipo){
        const director= new director("Santiago velez, 27 años de edad y 5 años de experiencia" );
        var arregloequipo=[];
        arregloequipo.push(new Jugador("Santiago","Ospina",20,"Portero"));
        arregloequipo.push(new Jugador("Julian","Tellez",23,"Defensa"));
        arregloequipo.push(new Jugador("Esteban","Restrepo",19,"Delantero"));
        arregloequipo.push(new Jugador("Ramiro","Yera",20,"Medio"));
       
        
       

    }
    getDetalles(){
        console.log("los jugadores son"+arregloequipo);
    }

    
    
}










