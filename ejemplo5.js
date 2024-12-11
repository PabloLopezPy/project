
    class Empleado {
       constructor (nombre, cargo, salario) {
        this.nombre =nombre;
        this.cargo = cargo;
        this.salario = salario;
    }
    aumentoSueldo(aumento) {
        this.salario +=this.salario* aumento/100;
        return this.salario;
    }
}
class Empresa {
    constructor(nombre="sin nombre", numEmpleados) {

    }
}
    let empleado1 = new Empleado("Pepe", "vendedor", 1500);
    let empleado2 = new Empleado();
    empleado1.departamento = "ventas";

    console.log(empleado1);
    console.log(empleado2);

    let empresa1 =  new empresa1;
    let empresa2 = new empresa2("Ucam", 1000);

    console.log(empresa1);
    console.log(empresa2);

    let usuario = {
        nombre : "luis",
        edad: 11,
        asignaturas : ["js", "servidor", "php"]
    };
    console.log(usuario.nombre);
    class Usuario {
        constructor (nombre, edad, asignaturas) {
            this.nombre= nombre;
            this.edad =edad;
            this.asignaturas= asignaturas;
        }
    }
    let usuario1 = new Usuario("jose luis", 23, "matematicas");