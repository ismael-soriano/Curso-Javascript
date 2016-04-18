(function (namespace) {
    namespace.self = {
        name: "Pedro",
        surname: "hurtado",
        write: function () {
            /*var self = this;
            [0, 1, 2].forEach(function () {
                console.log(self.name + " ", self.surname);
            });*/
            
            [0, 1, 2].forEach(function () {
                console.log(this.name + " ", this.surname);
            }.bind(this));
        }
    }
} (window.Vueling))