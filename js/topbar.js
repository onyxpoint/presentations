// Barra superior
var html_barra = '<div class="topbar"><h1 class="titulo">' + titulo + '</h1><image class="logo" src="images/header_logo.png"></div>';
if ( window.location.search.match( /print-pdf/gi ) ) {
    $('section').append(html_barra);
}
else {
    $('div.reveal').append(html_barra);
}
