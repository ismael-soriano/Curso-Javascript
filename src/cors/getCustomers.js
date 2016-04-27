(function (namespace) {

        $.get("http://localhost:4239/api/customer")
        .then(function (data) {
            var target = $('body'),
                source = $('table>tbody');

            data.forEach(function (item) {
                var tableRow = $('<tr/>');
                
                table = 
                
                tableRow.append($('<td/>').text(item.Id));
                tableRow.append($('<td/>').text(item.Name));
                tableRow.append($('<td/>').text(item.Phone));
                source.append(tableRow);
            });

            target.append(source);
            //alert("Load was performed.");
        });       
}())