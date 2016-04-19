(function (namespace) {
    var mixins = (namespace.mixins = namespace.mixins || {
        Animal = {
            comer: function () {
                console.log("Estoy comiendo");
            }
        },

        AnimalVolador = {
            volar: function () {
                console.log("Estoy volando");
            }
        },

        Output = {
            write: function (item) {
                console.log(item);
            }
        }
    });

    Gato = function () { }
    Loro = function () { }

    Object.assign(Gato.prototype, Animal, Output);
    Object.assign(Loro.prototype, Animal, AnimalVolador, Output);
} (window.Vueling))


