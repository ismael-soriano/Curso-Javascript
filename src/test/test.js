var PICHONCITOS = (function(){
    return {};
}());

PICHONCITOS.Antonio = (function(){
    function pichoncito (options) {
        this.estudia = (options && typeof(options.estudia) === "string" && options.estudia) || "Poco";
    }
    return pichoncito;
}());

console.log(new PICHONCITOS.Antonio({estudia:"Na"}));
console.log(new PICHONCITOS.Antonio({estudia: {test:"asdad"}}));
console.log(new PICHONCITOS.Antonio());