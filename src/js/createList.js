(function () {
    $.getJSON("./data.json")
        .then(function (data) {
            var target = $('div>div'),
                source = $('<ul/>');

            data.forEach(function (item) {
                source.append($('<li/>').text(item.text));
            });

            target.append(source);
        })
} ())