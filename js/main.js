$(document).ready(() => {
    const fruitValuesSetter = () => {
        $('#fruit-name').html(upperCaser(selectedFruit));
        $('#fruit-name').css('color', selectedTextColor);
        $('#fruit-img').attr('src', selectedImage);
        $('#remaining').html(remainingElem(index));
    }

    const btnDisableChecker = () => {
        if (index <= 0) {
            $('#previous').prop('disabled', true);
        } else {
            $('#previous').prop('disabled', false);
        }
        if (index >= fruitTempArray.length - 1) {
            $('#next').prop('disabled', true);
            $('#nextQ').prop('disabled', true);
        } else {
            $('#next').prop('disabled', false);
            $('#nextQ').prop('disabled', false);
        }
    }

    const getDisplay = () => {
        return $('#checker').css('display');
    };

    const checkBtnDisplay = getDisplay();
    
    const aclarador = () => {
        $('#fruit-img').animate({opacity: "0.3"});
    }

    // Initial Values on HTML elements
    fruitValuesSetter();

    // Checks conditions to disable buttons
    btnDisableChecker();

    // Previous element button
    $('#previous').on('click', () => {
        previousFruit();
        fruitValuesSetter();
        btnDisableChecker();
    });
    
    // Next element button
    $('#next').on('click', () => {
        nextFruit();
        fruitValuesSetter();
        btnDisableChecker();
    });

    const checkerFunction = () => {
        const valueFruit = $('#fruit-input').val();
        const checkerBoolean = fruitChecker(valueFruit);
        if (checkerBoolean) {
            if (index === fruitTempArray.length - 1) {
                $('#validation').html('Congratulations!! You finished the game!!');
                $('#validation').css('color', 'green');
                $('#checker').css('display', 'none');
                $('#nextQ').css('display', 'block');
                $('input').prop('disabled', true);
            } else {
                $('#validation').html('Correct');
                $('#validation').css('color', 'green');
                $('#checker').css('display', 'none');
                $('#nextQ').css('display', 'block');
                $('input').prop('disabled', true);
            }
        } else {
            $('#validation').html('Wrong');
            $('#validation').css('color', 'red');
        }
    }

    const nextQuestion = () => {
        nextFruit();
        fruitValuesSetter();
        btnDisableChecker();
        $('#fruit-input').val('');
        $('#validation').html('');
        $('#checker').css('display', 'block');
        $('#nextQ').css('display', 'none');
        $('input').prop('disabled', false);
        $('#fruit-input').focus();
    }

    document.onkeydown = checkKey;

    function checkKey(e) {

        e = e || window.event;

        if (e.keyCode == '38') {
            // up arrow
        }
        else if (e.keyCode == '40') {
            // down arrow
        }
        else if (e.keyCode == '37') {
            if ($('#previous').length) {
                previousFruit();
                fruitValuesSetter();
                btnDisableChecker();
            }
        }
        else if (e.keyCode == '39') {
            if ($('#next').length) {
                nextFruit();
                fruitValuesSetter();
                btnDisableChecker();
            }
        }
        else if (e.keyCode == '13') { 
            if ($('#checker').css('display') == 'block') {
                checkerFunction();
            } else if ( $('#checker').css('display') == 'none' && !(index >= fruitTempArray.length - 1) ) {
                nextQuestion();
            }
        }

    }

    $('#form').on('keyup keypress', (e) => {
        const keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
            e.preventDefault();
            return false;
        }
    });

    $('#checker').on('click', checkerFunction);

    $('#nextQ').on('click', nextQuestion);

});
