// Animation ProgressBar
function modifValues() {
    var val = $('#progress progress').attr('value');
    if (val >= 100) { val = 5; }
    var newVal = val * 1 + 0.25;
    var txt = Math.floor(newVal) + '%';

    $('#progress progress').attr('value', newVal).text(txt);
    $('#progress strong').html(txt);
}
setInterval(function() { modifValues(); }, 40);