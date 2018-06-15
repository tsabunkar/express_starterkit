$(document).ready(function () {

    $("#inputMessageId").keyup(function () {
        var dInput = this.value;
        // console.log(dInput);
        $('#spanId').text(dInput);
    });

});