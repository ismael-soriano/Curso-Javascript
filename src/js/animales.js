var Animal = {
    comer: function() {
        console.log("Estoy comiendo");
    }
}

var AnimalVolador = {
    volar: function() {
        console.log("Estoy volando");
    }
}

var Output = {
    write: function (item) {
        console.log(item);
    }
}

var Gato = function() {}
var Loro = function() {}

Object.assign(Gato.prototype, Animal, Output);
Object.assign(Loro.prototype, Animal, AnimalVolador, Output);