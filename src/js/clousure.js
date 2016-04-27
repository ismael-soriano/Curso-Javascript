(function(namespace) {
    namespace.clousure = function(name) {
        var saludo = "Hello ";
        return function() {
            console.log(saludo + name);
        };
    };
}(window.Vueling));