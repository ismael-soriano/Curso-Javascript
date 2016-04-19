(function() {
    function bootStrap() {
        $('input').on('input', function() {
            var search = $(this).val().toUpperCase();
            $('ul > li').each(function(_, li) {
                var $li = $(li),
                text = $li.text().toUpperCase();
                text.indexOf(search) !== -1 ? $li.show(): $li.hide();
            })
        })
    }

    $(document).ready(bootStrap);
}())