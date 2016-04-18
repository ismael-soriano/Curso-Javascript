(function (namespace) {
    namespace.variables = {
        noHacer: function (name) {
            var saludo = "Hola";

            for (var i = 0; i <= 10; i++) {
                var pepe = "Hola Pepe";
                console.log(saludo + " " + name);
            }
            
            console.log(i);
            console.log(pepe);
        },
        Hacer: function (name) {
            var saludo = "Hola",
                i = 0,
                pepe = "Hola Pepe";
                
            for (i; i <= 10; i++) {
                console.log(saludo + " " + name);
            }
            
            console.log(i);
            console.log(pepe);
        }
    }
} (window.Vueling))