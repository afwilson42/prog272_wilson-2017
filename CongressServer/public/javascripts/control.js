
$(document).ready(function() { 'use strict';

    var insertUrl = '/insertValidCollection';
    var emptyUrl = '/emptyCollection';
    var updateUrl = '/update';
    var retrieveUrl = '/all-data';
    let collection;


    /* functions for buttons */
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

    function getData(){
        $.getJSON(retrieveUrl, function(result) {
            collection = result.allData;
            $('#display').html(JSON.stringify(result, null, 4));
        })
            .done(function(){
                console.log("Data Successfully retrieved");
            })
            .fail(function(error){
                alert("error" );
            })
            .always(function(){
                console.log("data retrieval process complete");
            })
    }

    function update(){
        collection[0].firstName = 'foo';
        console.log(collection[0]._id);
        console.log(collection[0].firstName);
        const newData = {
            id: collection[0]._id,
            firstName: collection[0].firstName
        };
        console.log(newData);
        $.getJSON(updateUrl , newData, function(result){
            $('#display').html(JSON.stringify(result, null, 4));
        })
            .done(function(){
                console.log("entry 1 first name Successfully updated");
            })
            .fail(function(error){
                alert("error" );
            })
            .always(function(){
                console.log("update process complete");
            })
    }

    function empty(){
        console.log('Empty Button clicked');
        $.get(emptyUrl, function(result) {
            $('#display').html(JSON.stringify(result, null, 4));
        });
    }

    /* button click function assignments */
    $('#insertValidData').click(insertCollection);

    $("#getAll").click(getData);

    $('#emptyCollection').click(empty);

    $('#update').click(update);

});
