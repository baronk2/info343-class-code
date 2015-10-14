/**
 * application script for index.html
 */

document.addEventListener(
    'DOMContentLoaded',
    function () {
        'use strict';

        function forEachElement(collection, fn){
            var i;
            for (i = 0; i < collection.length; i++) {
                fn(collection[i])
            }
        }

        var clickMeButton = document.getElementById("click-me");
        clickMeButton.addEventListener(
            'click',
            function() {
                var alerts = document.querySelectorAll('.alert');
                forEachElement(alerts, function(alert) {

                })
                alert("You clicked me!");
            });
        var closeButtons = document.querySelectorAll('.alert .close');
        var idx;
        var closeButton;
        for(idx = 0; idx < closeButtons.length; ++idx) {
            closeButton = closeButtons[idx];
            closeButton.addEventListener(
                'click',
                function() {
                    this.parentElement.style.display = 'none';
                });
        }
});
