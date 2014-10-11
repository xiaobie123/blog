(function( win, doc ) {
    var support = (function() {
        var oDiv = doc.createElement('div'),
        browsers = 'O-Moz-Webkit'.split('-'),
        len = browsers.length,
        prop = "Perspective";
        if ( prop in oDiv.style ) {
            return true;
        }
        if ( '-ms-' + prop in oDiv.style ) {
            return true;
        }
        while( len-- ) {
            if ( browsers[len] + prop in oDiv.style ) {
                return true;
            }
        }
        return false;
    })();
    if( !support || doc.documentMode == 10 ) {
        var hash, arr, len, archive, aid, path;
        var loc = win.location;
        var host = loc.host;
        hash = loc.hash.replace(/^[#\/\!]+/, '');
        arr = hash.split('/');
        len = arr.length;
        if( len === 1 ) {
            aid = null;
        }
        else if( len === 2 ) {
            aid = arr[1];
        }
        else {
            aid = arr[2] === '' ? arr[1] : null;
        }
        archive = arr[0];
        if( archive === 'index' ) {
            path = '';
        }
        if( archive && !aid ) {
            path = '/p/' + archive;
        }
        if( archive && aid ) {
            path = '/' + aid + '.html';
        }
        win.location.href = 'http://' + host + path;
    }
})( window, document );