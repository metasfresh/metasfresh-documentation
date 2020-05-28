$(document).ready(function () {

    /* Display correct searchbox and add placeholder attribute according to language */
    if ( document.documentElement.lang.toLowerCase() === "de" ) {
        $('.searchbox-de').removeClass('no-display-de');
        $('input[id=gsc-i-id1]').attr('placeholder', 'Durchsuche docs.metasfresh.org');
    } else {
        $('.searchbox-en').removeClass('no-display-en');
        $('input[id=gsc-i-id2]').attr('placeholder', 'Browse docs.metasfresh.org');
    }

});
