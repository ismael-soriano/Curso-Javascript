(function ($) {
    function getCustomers() {
        $.get("http://localhost:4239/api/customer")
            .then(function (data) {
                var target = $("table>tbody");

                data.forEach(function (item) {
                    var tableRow = $("<tr/>");

                    tableRow.append($("<td/>").text(item.Id));
                    tableRow.append($("<td/>").text(item.Name));
                    tableRow.append($("<td/>").text(item.Phone));
                    target.append(tableRow);
                });
            });
    }

    $(document).ready(getCustomers);
} ());