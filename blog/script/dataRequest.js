/**
 * Created by a.zhmakin on 27.04.2016.
 */

var httpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                var myArr = JSON.parse(anHttpRequest.responseText);
                aCallback(myArr);
        };

        anHttpRequest.open( "GET", aUrl, true );
        anHttpRequest.send( null );
    }
};
