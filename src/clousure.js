(function(namespace) {
    namespace.clousure = function(name) {
        return function() {
            console.log("Hello " + name);
        }
    }
}(window.Vueling));