(function (namespace) {
    var functions = {
        foo: function (a, b) {
            console.log(a + " " + b);
        },
        bar: function (a) {
            console.log(a);
        }
    }
    namespace.convertArgumentsToArray = function () {
        var fn = arguments[0],
            params = Array.prototype.slice.call(arguments, 1);
        functions[fn].apply(null, params);
    }
} (window.Vueling))