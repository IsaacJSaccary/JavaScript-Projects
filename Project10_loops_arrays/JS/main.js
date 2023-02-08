// While loop
function while_Function() { //Created function
    var Digit = ""; // created variable digit
    var X = 1; // created variable X
    while (X < 11) { //while X is less than 11
        Digit += "<br>" + X; //Add a space to digit plus X
        X++ // Add another to X
    }
    document.getElementById("Counting").innerHTML = Digit; // Execute the code
}

// For Loop
var Fruits = ["Apple", "Orange", "Pineapple", "Grapes", "Watermelon"]; // created variable fruits
var Content = ""; // created variable content 
var Y; // Created variable Y
function for_Loop() { // Created function for loop
    for (Y = 0; Y < Fruits.length; Y++) { // Created For loop
        Content += Fruits[Y] + "<br>";
    }
    document.getElementById("List_of_Fruits").innerHTML = Content; // Executed code
}

function array_Function() {
    var Dog_Picture = [];
    Dog_Picture[0] = "sleeping";
    Dog_Picture[1] = "playing";
    Dog_Picture[2] = "eating"; // Created Object "Dog_Picture" indexes 0-3 and properties "sleeping", "playing", "eating" and "barking"
    Dog_Picture[3] = "barking";
    document.getElementById("Dog").innerHTML = "In this picture, the dog is " + Dog_Picture[1] + "." // Executed the code
}

    document.write("<br>");

{
    let X = 65; // Created variable X
    let Y = 78 // Created variable Y
    document.write(X * Y); // Executed X * Y
}