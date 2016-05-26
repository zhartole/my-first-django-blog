/**
 * Created by a.zhmakin on 27.04.2016.
 */
var checkInput = (function(){
    var element,
        resultBox;

    function convertToNumber(){
        var result = resultBox.innerHTML,
            number = parseInt(element.value); //also we can change type from string to number with  +element.value
       number ? result = "Now your text is a " + typeof(number) + " - " + number :
                result = "Please write a number. <i>Example: </i>  '1234'";
    }

    function runConvert(){
        element.addEventListener('keyup', function(){
            convertToNumber()
        });
    }

    function searchElement(elem){
        return document.querySelector(''+ elem +'');
    }

    return {
        initCheck: function(listenElement, resultElement){
            element     = searchElement(listenElement);
            resultBox   = searchElement(resultElement);
            runConvert();
        }
    }
}());
checkInput.initCheck('#example-input','#result-box');