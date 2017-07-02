$(document).on('click', '.number-spinner button', function () {
    var btn = $(this),
        oldValue = btn.closest('.number-spinner').find('input').val().trim(),
        newVal = 0;

    if(!isNumeric(oldValue)){
        oldValue = 0;
    }

    if (btn.attr('data-dir') == 'up') {
        newVal = parseInt(oldValue) + 1;
    } else {
        if (oldValue >= 1) {
            newVal = parseInt(oldValue) - 1;
        } else {
            newVal = 0;
        }
    }
    btn.closest('.number-spinner').find('input').val(newVal);
});



function isNumberKey(evt)
{
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31
        && (charCode < 48 || charCode > 57))
        return false;
    return true;
}


function isNumericKey(evt)
{
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31
        && (charCode < 48 || charCode > 57))
        return true;
    return false;
}

function isNumeric(str) {
    return /^\+?(0|[1-9]\d*)$/.test(str);
}