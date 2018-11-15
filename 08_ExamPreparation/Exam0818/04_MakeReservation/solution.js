function makeReservation(containerId) {
    let submitBtn = $('#submit');
    let editBtn = $('#edit');
    let continueBtn = $('#continue');

    submitBtn.on('click', submitForm);
    editBtn.on('click', editForm);
    continueBtn.on('click', addPayment);

    let fullName = $('#fullName');
    let email = $('#email');
    let phoneNumber = $('#phoneNumber');
    let address = $('#address');
    let postalCode = $('#postalCode');
    let ul = $('#infoPreview');

    function submitForm() {
        if (fullName.val() !== "" && email.val() !== "") {
            ul
                .append($('<li>').text(`Name: ${fullName.val()}`))
                .append($('<li>').text(`E-mail: ${email.val()}`))
                .append($('<li>').text(`Phone: ${phoneNumber.val()}`))
                .append($('<li>').text(`Address: ${address.val()}`))
                .append($('<li>').text(`Postal Code: ${postalCode.val()}`));

            submitBtn.attr('disabled', true);
            fullName.val('');
            email.val('');
            phoneNumber.val('');
            address.val('');
            postalCode.val('');

            editBtn.attr('disabled', false);
            continueBtn.attr('disabled', false);
        }
    }

    function editForm() {
        let li = $('li');
        fullName.val(li[0].textContent.substring(6));
        email.val(li[1].textContent.substring(8));
        phoneNumber.val(li[2].textContent.substring(7));
        address.val(li[3].textContent.substring(9));
        postalCode.val(li[3].textContent.substring(13));

        li.remove();
        editBtn.attr('disabled', true);
        continueBtn.attr('disabled', true);
        submitBtn.attr('disabled', false)
    }

    function addPayment() {
        editBtn.attr('disabled', true);
        continueBtn.attr('disabled', true);
        submitBtn.attr('disable', true);

        let container = $('#container');

        let h2 = $('<h2>').text('Payment details');
        let select = $('<select id="paymentOptions" class="custom-select">');
        select
            .append($('<option selected disabled hidden>Chose</option>'))
            .append($('<option value="creditCard">Credit Card</option>'))
            .append($('<option value="bankTransfer">Bank Transfer</option>'));

        let extraDetails = $('<div>').attr('id', 'extraDetails');

        container
            .append(h2)
            .append(select)
            .append(extraDetails);

        select.on('change', appendExtraDetails);
    }

    function appendExtraDetails() {
        let selected = $('#paymentOptions').find(':selected').val();
        $('#extraDetails').empty();

        if (selected === "creditCard") {
            $('#extraDetails')
                .append($('<div class="inputLabel">Card Number<input></div><br>'))
                .append($('<div class="inputLabel">Expiration Date<input></div><br>'))
                .append($('<div class="inputLabel">Security Numbers<input></div><br>'))
                .append($('<button id="checkOut">Check Out</button>'));
        } else {
            $('#extraDetails')
                .append($('<p>You have 48 hours to transfer the amount to:<br>IBAN: GR96 0810 0010 0000 0123 4567 890</p>'))
                .append($('<button id="checkOut">Check Out</button>'));
        }
        $('#checkOut').on('click', clearAll);

    }

    function clearAll() {
        $('#wrapper').empty();
        $('#wrapper')
            .append($('<h4>Thank you for your reservation!</h4>'))
    }
}

// 91 %