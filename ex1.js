
/**
 * 1) Crea una clase Personaje.
 * Dicha clase tiene las siguientes características (vamos a simplificarlo)
 * 
 *  - Nombre
 *  - Raza
 *  - Puntos de vida
 *  - Características 
 *
 * 2) Implementa un método de nombre 'ataqueFisico' que simula un ataque cuerpo a cuerpo. Tan solo es necesario que hagas un console.log para indicar que se ha invocado el método.
 * 
 *  *  Además todos los personajes cuando empiezan sus aventuras tienen 0 puntos de experiencia. Guarda también este dato
 */

 /* 
 * "Características" es una variable de tipo objeto, que se compone de :
      - Fuerza
      - Agilidad
      - Resistencia
      - Inteligencia
 */

 // Ejemplo: https://oscarm.tinytake.com/tt/NTAxNzQ5M18xNTc4NDk3MQ


class Personaje {
    constructor(name, race, hp, stats){
        this.name = name,
        this.race = race,
        this.hp = hp,
        this.stats = stats
        this.xp = 0
    }
}

let caracteristicas = {
    fuerza: 12,
    agilidad: 15,
    resistencia: 9,
    inteligencia: 17
}
let personajeGenerico = new Personaje('Arod', 'Elfo', 150, caracteristicas)
console.log(personajeGenerico)
