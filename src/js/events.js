(function () {
    // Javascript Vanilla
    /*function bootStrap() {
        var google = document.querySelector('a'),
            span = document.querySelector('span');

        function click(ev) {
            ev.preventDefault();
            span.style.display = "none";
        }

        google.addEventListener('click', click, false);
    }


    function ready(ev) {
        console.log(document.readyState);
    }

    document.addEventListener('DOMContentLoaded', bootStrap, false);
    document.addEventListener('readystatechange', ready, false);*/
    
    function bootStrap() {
        function click(ev) {
            ev.preventDefault();
            $('span').hide();
        }
            
        $('a').on("click", click);
    }
    
    $(document).ready(bootStrap);
    
} ())

