function clickButton() {
    if ($('#password').val() !== $('#confirmation').val()) {
        $("#password").css('border', '1px solid red');
        $("#confirmation").css('border', '1px solid red');
    } else {
        $("#password").css('border', '1px solid green');
        $("#confirmation").css('border', '1px solid green');
    }
}