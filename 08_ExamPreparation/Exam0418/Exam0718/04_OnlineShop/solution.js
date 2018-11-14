function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);
    let productName = $('.custom-select');
    let price = $('#price');
    let quantity = $('#quantity');
    let ul = $('ul.display');
    let capacity = $('#capacity');
    let total = $('#sum');
    let submitBtn = $('#submit');

    let totalCapacity = 0;
    let totalSum = 0;

    productName.on('input', () => submitBtn.attr('disabled', false));
    submitBtn.on('click', addItem);

    function addItem() {
        if (productName.val()) {
            totalCapacity += +quantity.val();
            totalSum += +price.val();

            let li = $('<li>');
            li.text(`Product: ${productName.val()} Price: ${price.val()} Quantity: ${quantity.val()}`);
            li.appendTo(ul);

            if (totalCapacity < 150) {
                capacity.val(totalCapacity);
                resetInputFields();
            } else {
                capacity.val('full');
                capacity.attr('class', 'fullCapacity');

                resetInputFields();
                blockAll();
            }
            total.val(totalSum)
        }

        function resetInputFields() {
            productName.val("");
            price.val(1);
            quantity.val(1);
            submitBtn.attr('disabled', true);
        }

        function blockAll() {
            productName.attr('disabled', true);
            price.attr('disabled', true);
            quantity.attr('disabled', true);
            submitBtn.attr('disabled', true);
        }
    }
}
