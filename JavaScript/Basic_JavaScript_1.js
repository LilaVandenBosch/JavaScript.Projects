function Food_Function() {
    var Food_Output;
    var Foods = document.getElementById("Food_Input").value;
    var Foods_String = " is a great choice!";
    switch(Foods) {
        case "Apples":
            Food_Output = "Apples" + Foods_String;
            break;
            case "Carrots":
                Food_Output = "Carrots" + Foods_String;
            break;
            case "Tomatoes":
                Food_Output = "Tomatoes" + Foods_String;
            break;
            case "Broccoli":
                Food_Output = "Broccoli" + Foods_String;
            break;
            default:
            Food_Output = "Please enter a food exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Food_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

// function triangle() {
    var canvas = document.getElementById("Canvas");
    var context = canvas.getContext('2d');
    // canvas.width = 400;  canvas.height = 400;
    context.beginPath();  context.moveTo(75, 50);
    context.lineTo(100, 75);  context.lineTo(100, 25);  
    context.lineTo(75, 50); // Back to where we started  context.stroke();
    context.fill();
// }

// var c = document.getElementById("Canvas");
// var ctx = c.getContext("2d");
// ctx.moveTo(0, 0);
// ctx.lineTo(200, 100);
// ctx.stroke();