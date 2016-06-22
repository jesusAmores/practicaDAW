"use strict";

$('document').ready(function(){

    function removeStyle() {
        $("modal-open").removeClass();
        $(".modal-backdrop fade in").removeClass();
    }

    $(".btn btn-primary").click(function (event) {

        removeStyle();
    })

})
