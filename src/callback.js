(function(namespace) {
    callCallback = function(array, fn) {
        array.forEach(fn);
    };
    
    namespace.callback = function() {
        callCallback.apply(null, arguments);
    }
}(window.Vueling))