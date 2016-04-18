var Animal = {
    comer: function() {
        
    }
}

var AnimalVolador = {
    volar: function() {
        
    }
}

var Output = {
    write: function () {
        console.log(this);
    }
}

var Gato = function() {}
var Loro = function() {}

Object.assign(Gato.prototype, Animal, Output);
Object.assign(Loro.prototype, Animal, AnimalVolador, Output);