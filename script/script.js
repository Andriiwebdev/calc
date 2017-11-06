$(document).ready(function () {

    // VARIABLES
    var calc = $('.calculator');
    var calcDisplay = calc.find('.calculator__display');
    var calcKeys = calc.find('.calculator__key');
    var calcButton = calc.find('.calculator__button');
    var calcClear = calc.find('.calculator__clear');
    var calcEqual = calc.find('.calculator__key--equal');
    var calcPower = calc.find('.calculator__power');
    var calcSpace = calc.find('.calculator__backspace');
    var calcRad = calc.find('.calculator__radical');
    var calcPlusMin = calc.find('.calculator__plusmin');
    var calcSin = calc.find('.calculator__sin');
    var calcCos = calc.find('.calculator__cos');
    var calcTan = calc.find('.calculator__tan');
    var calcAsin = calc.find('.calculator__asin');
    var calcAcos = calc.find('.calculator__acos');
    var calcAtan = calc.find('.calculator__atan');
    var calcLg = calc.find('.calculator__lg');
    var calcLn = calc.find('.calculator__ln');
    var calcExp = calc.find('.calculator__exp');
    var calcPerc = calc.find('.calculator__percent');
    var calcPi = calc.find('.calculator__pi');
    var calcFact = calc.find('.calculator__factorial');
    var calcLogic = calc.find('.logic');
    var calcDot = calc.find('.dot');

    // INIT CALC KEYS
    calcLogic.on('click', function () {
        if (calcDisplay.val() == "") {
            calcDisplay.val("0");
        }
    });
    calcKeys.on('click', function () {
        if (calcDisplay.val() == "0") {
        calcDisplay.val("0.");
        return;
        }
    });
    // calcDot.on('click', function () {
    //     var check = calcDisplay.val().split(/\+|-|\*|\//);
    //     for (var i = 0; i < check.length; i++) {
    //         var ff = check[i].indexOf(".");
    //         //console.log(ff);
    //         if (check[i].indexOf(".") >= 0) {
    //             $(this) = false;
    //             return;
    //         }
    //     }
    //
    //
    // });
    calcKeys.each(function () {
        var current = $(this).attr('value');
        $(this).text(current);
    });

    // ADD NUMBERS TO INPUT
    calcButton.on('click', function () {
        calcDisplay.val( calcDisplay.val() + $(this).attr('value'));

    });

    // CLEAR INPUT
    calcClear.on('click', function () {
        calcDisplay.val('');
    });

    // SHOW RESULT
    calcEqual.on('click', function () {
        var result = calcDisplay.val().replace(/--/g, "-");
        calcDisplay.val( eval( result ) );
    });

    // POWER BUTTON
    calcPower.on('click', function () {
        calcDisplay.val( Math.pow( eval( calcDisplay.val()), 2 ) );
    });
    // RADICAL BUTTON
    calcRad.on('click', function () {
        calcDisplay.val(Math.sqrt( eval( calcDisplay.val()), 2 )  );
    });
    // +/- BUTTON
    calcPlusMin.on('click', function () {
        calcDisplay.val( eval( calcDisplay.val()+'*-1'));
    });
    // Sin BUTTON
    calcSin.on('click', function () {
        calcDisplay.val(Math.sin(eval( calcDisplay.val())));
    });
    // Cos BUTTON
    calcCos.on('click', function () {
        calcDisplay.val(Math.cos(eval( calcDisplay.val())));
    });
    // Tan BUTTON
    calcTan.on('click', function () {
        calcDisplay.val(Math.tan(eval( calcDisplay.val())));
    });
    // Asin BUTTON
    calcAsin.on('click', function () {
        if (eval( calcDisplay.val()) > 1) {
            eval( calcDisplay.val(0));
        }
        else {
            calcDisplay.val(Math.asin(eval( calcDisplay.val())));
        }
    });
    // Acos BUTTON
    calcAcos.on('click', function () {
        if (eval( calcDisplay.val()) > 1) {
            eval( calcDisplay.val(0));
        }
        else {
            calcDisplay.val(Math.acos(eval( calcDisplay.val())));
        }
    });
    // Atan BUTTON
    calcAtan.on('click', function () {
        calcDisplay.val(Math.atan(eval( calcDisplay.val())));
    });
    // Lg BUTTON
    calcLg.on('click', function () {
        calcDisplay.val(Math.log10(eval( calcDisplay.val())));
    });
    // Ln BUTTON
    calcLn.on('click', function () {
        calcDisplay.val(Math.log1p(eval( calcDisplay.val())));
    });
    // Exp BUTTON
    calcExp.on('click', function () {
        calcDisplay.val(Math.exp(eval( calcDisplay.val())));
    });
    // PI BUTTON
    calcPi.on('click', function () {
        calcDisplay.val(eval(calcDisplay.val())*3.14);
    });
    // Factorial BUTTON
    calcFact.on('click', function () {
        function factorial(n) {
          return (n != 1) ? n * factorial(n - 1) : 1;
        }
        calcDisplay.val(factorial(calcDisplay.val()));
    });
    // Percent BUTTON
    calcPerc.on('click', function () {
        var B = calcDisplay.val().match(/((\d|\.)+)(?!.*\d)/)[0];
        var lastNum = calcDisplay.val().lastIndexOf(B);
        var arr = calcDisplay.val().split("");
        var A = arr.slice(0, lastNum-1).join("");
        var C = arr[lastNum-1];
        var first = eval(A);
        var second = eval(first*B/100);
        calcDisplay.val(eval(first+C+second));
    });

    // BACKSPACE BUTTON
    calcSpace.on('click', function () {
        calcDisplay.val( calcDisplay.val().substring(0, calcDisplay.val().length-1) );
    });
});
