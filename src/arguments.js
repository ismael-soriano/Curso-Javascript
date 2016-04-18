(function (namespace) {
    namespace.arguments = {
        returnFirstArgument: function () {
            console.log(arguments[0]);
        },

        returnFromSecondArgument: function () {
            var args = [].slice.call(arguments, 2); // Array.prototype.slice.call(arguments, 2);
            args.forEach(item => console.log("<div>" + item + "</div>"));
        }
    }
} (window.Vueling))