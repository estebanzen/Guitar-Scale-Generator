var notes = [
    { "noteStr": 'A', "noteClass": "a" },
    { "noteStr": 'A#', "noteClass": "a-s" },
    { "noteStr": 'B', "noteClass": "b" },
    { "noteStr": 'C', "noteClass": "c" },
    { "noteStr": 'C#', "noteClass": "c-s" },
    { "noteStr": 'D', "noteClass": "d" },
    { "noteStr": 'D#', "noteClass": "d-s" },
    { "noteStr": 'E', "noteClass": "e" },
    { "noteStr": 'F', "noteClass": "f" },
    { "noteStr": 'F#', "noteClass": "f-s" },
    { "noteStr": 'G', "noteClass": "g" },
    { "noteStr": 'G#', "noteClass": "g-s" },
];

console.clear();
var notesLength = notes.length;

function stringConstructor(i) {

    var stringHtml = '';
    var sarlanga = 0;

    for (a = 0; a < 14; a++) {

        stringHtml += '<td class="' + notes[i].noteClass + '"><span>' + notes[i].noteStr + '</span></td>';

        i++;

        if (i == notesLength) {
            i = 0;
        }

        sarlanga++;
    }

    return stringHtml;
}
var diapasonHtml = '';

diapasonHtml = '<tr>' + stringConstructor(7) + '</tr>';
diapasonHtml += '<tr>' + stringConstructor(2) + '</tr>';
diapasonHtml += '<tr>' + stringConstructor(10) + '</tr>';
diapasonHtml += '<tr>' + stringConstructor(5) + '</tr>';
diapasonHtml += '<tr>' + stringConstructor(0) + '</tr>';
diapasonHtml += '<tr>' + stringConstructor(7) + '</tr>';

$('.guitar').html(diapasonHtml);
$('.piano').html('<tr>' + stringConstructor(3) + '</tr>');

var multipleNotes = true;

$('table td').click(function() {

    if ($('.selectAllNotes').is(':checked')) {
        multipleNotes = true;
    } else {
        multipleNotes = false;
    }

    if (multipleNotes == true) {
        var clases = $(this).attr('class');
        clases = clases.replace("active", "");
        $('.' + clases).toggleClass("active");

    } else {
        $(this).toggleClass("active");
    }

});
