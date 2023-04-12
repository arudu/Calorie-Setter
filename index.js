var calculateBtn = document.getElementById('calculate');

calculateBtn.addEventListener('click', function() {

    var input1 = document.getElementById('weight');
    var input2 = document.getElementById('sessions');
    var input3 = document.getElementById('intense');

    var value1 = parseInt(input1.value);
    var value2 = parseInt(input2.value);
    var value3 = parseInt(input3.value);

    var result = value1 * (value2 + value3);

    document.getElementById('result').value = result;
});