function addSticker() {
    let title = $('.title');
    let text = $('.content');
    let ul = $('#sticker-list');

    if (title.val() && text.val()) {
        let li = $('<li class="note-content">');
        let a = $('<a class="button">x</a>');
        a.on('click', () => li.remove());
        let h2 = $(`<h2>${title.val()}</h2>`);
        let hr = $('<hr>');
        let p = $(`<p>${text.val()}</p>`);

        $(li)
            .append(a)
            .append(h2)
            .append(hr)
            .append(p)
            .appendTo(ul);

        title.val("");
        text.val("");
    }
}