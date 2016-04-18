(function (namespace) {
    namespace.writePersona = {
        foo: function (obj, properties) {
            properties.forEach(function (property) {
                if (obj.hasOwnProperty(property)) {
                    console.log(obj[property]);
                }
            })
        }
    }
} (window.Vueling))