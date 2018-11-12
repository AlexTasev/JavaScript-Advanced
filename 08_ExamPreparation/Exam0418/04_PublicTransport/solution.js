class PublicTransportTable {
    constructor(townName) {
        this.townName = townName;
        PublicTransportTable.changeHeaderName(townName);
        this.addEventListeners();
    }

    static changeHeaderName(townName) {
        $('caption').text(`${townName}'s Public Transport`)
    }

    addVehicle(obj) {
        let tr = $(`<tr><td>${obj.type}</td><td>${obj.name}</td>`);
        let button = $("<button>More Info</button>");
        let trExtra = $(`<tr class = 'more-info'><td colspan="3">` +
            `<table>` +
            `<tr><td>Route: ${obj.route}</td></tr>` +
            `<tr><td>Price: ${obj.price}</td></tr>` +
            `<tr><td>Driver: ${obj.driver}</td></tr>` +
            `</table></td></tr>`);
        button.on('click', function (event) {
            if ($(event.target).text() === "More Info") {
                $(event.target).text("Less Info");
                trExtra.insertAfter(tr);
            } else {
                $(event.target).text("More Info");
                trExtra.remove();
            }
        });
        let td = $('<td>');
        td.append(button);
        tr.append(td);
        $('.vehicles-info').append(tr);
    }

    addEventListeners() {
        $('.search-btn').on('click', function () {
            let rows = $('.vehicles-info > tr').not(".more-info");
            let typeForm = $('input[name = "type"]');
            let nameForm = $('input[name = "name"]');
            let type = typeForm.val();
            let name = nameForm.val();
            
            if (name || type) {
                for (let i = 0; i < rows.length; i++) {
                    let firstChild = $(rows[i]).find('td').eq(0);
                    let secondChild = $(rows[i]).find('td').eq(1);
                    if (!firstChild.text().includes(type) || !secondChild.text().includes(name)) {
                        $(rows[i]).css('display', 'none');
                        let button = $(rows[i]).find('td').eq(2);
                        if (button.text() === "Less Info") {
                            button.click();
                        }
                    } else {
                        $(rows[i]).css('display', '');
                    }
                }
            }
        });

        $('.clear-btn').on('click', function () {
            let rows = $('.vehicles-info > tr');
            let typeForm = $('input[name = "type"]');
            let nameForm = $('input[name = "name"]');
            let type = typeForm.val("");
            let name = nameForm.val("");
            for (let i = 0; i < rows.length; i++) {
                $(rows[i]).css('display', '');
            }
        });
    }
}

// 90 %