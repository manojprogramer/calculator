let screen = document.querySelector(".screen")
button = document.getElementsByTagName("button")
let screenValue = "";
function fun(button) {
    let buttonText = button.innerText;
    if(buttonText == "AC")
    {
        screenValue = "";
        screen.value = screenValue;
    }
    else if(buttonText == "=")
    {
        let ans = eval(screenValue);
        screen.value = ans;
    }
    else if(buttonText == "x")
    {
        screenValue += "*";
        if(screenValue.includes("*"))
        {
            screen.value = screenValue.replaceAll("*","x");
        }
    }
    else {
        screenValue += buttonText;
        if(screenValue.includes("*"))
        {
            screen.value = screenValue.replaceAll("*","x");
        }
        else {
            screen.value = screenValue;
        }
    }

}