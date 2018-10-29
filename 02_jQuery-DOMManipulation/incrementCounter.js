function increment(selector) {
    let selec = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $("<textarea>");
    textArea.addClass("counter");
    textArea.attr("disabled", "disabled");
    textArea.val("0");

    let firstBtn = $("<button class='btn' id='incrementBtn'>Increment</button>");
    let secondBtn = $("<button class='btn' id='addBtn'>Add</button>");
    let ul = $("<ul class='results'></ul>");

    $(fragment)
        .append(textArea)
        .append(firstBtn)
        .append(secondBtn)
        .append(ul);
    $(fragment).appendTo(selec);

    firstBtn.on("click", addOne);
    secondBtn.on("click", displayNum);
    
    function addOne() {
        let num = textArea.val();
        textArea.val(`${+num +1}`);
    }

    function displayNum() {
        $("<li>").text(`${textArea.val()}`).appendTo(ul);
    }
}