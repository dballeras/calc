    //let (inputValue) is the id of the input text
    let inputValue = document.getElementById("inputValue");

    //You can use any name other than expression for this let
    let button = "";

    //number bottons&for plus divide times minus
    function press(num) {
    button += num;
    inputValue.value = button;
    }

    //equal button,used to evaluate the answer inside the inputValue input
    function equal() {
    button = eval(button);
    //inputValue.value = button;
    inputValue.value = 'I miss you po! 🥺';

    }

    //to remove everything inside the inputValue input
    function erase() {
    button = '';
    inputValue.value = button;
    }

