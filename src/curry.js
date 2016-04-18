(function(namespace) {
    namespace.curry = {
        noCurry : function(saludo, name) {
            console.log(saludo +  " " + name);
        },
        
        estoEsCurry : function(saludo) {
            return function(name) {
                console.log(saludo + " " + name);
            }
        }
    }
}(window.Vueling))