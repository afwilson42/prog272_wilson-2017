$(document).ready(function() { 'use strict';

    var insertUrl = '/insertValidCollection';
    var emptyUrl = '/emptyCollection';

    function insertCollection() {
        $.get(insertUrl, function(result) {
            $('#display').html(JSON.stringify(result, null, 4));
            console.log(JSON.stringify(result, null, 4));
        })
            .done(function() {
                console.log( "second success" );
            })
            .fail(function(error) {
                alert( "error" );
            })
            .always(function() {
                console.log( "finished" );
            });
    }

    $('#insertValidData').click(insertCollection);

    $("#getAll").click(function() {
        $.getJSON('/all-data', function(result) {
            $('#display').html(JSON.stringify(result, null, 4));
        })
    });

    $('#EmptyCollection').click(function(){
        console.log('Empty Button clicked');
        $.get(emptyUrl, function(result) {
            $('#display').html(JSON.stringify(result, null, 4));
        });
    })

    $('#Update').click(function(){
        console.log('Update button clicked');
    });

});
