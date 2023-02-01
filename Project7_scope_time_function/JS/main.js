function Time_function() { //Function "Time_function"
    var Time = new Date().getHours(); //Variable "Time" = "new Date().getHours()"
    var Reply; //Creating variable Reply
    if (Time < 12 == Time > 0) {  //Creating the if statement
        Reply = "It is morning time!"; //Display this sentence under certain circumstances
    }
    else if (Time >= 12 == Time < 18) {  //Creating the els if statement
        Reply = "It is afternoon.";  //Display this sentence under certain circumstances
    }
    else {  //creating the else statement
        Reply = "It is evening time.";  //Display this sentence under certain circumstances
    }
    document.getElementById("Time_of_day").innerHTML = Reply;  //display this paragraoh with this sentence for the certain circumstance
}

var X = 10; //Creating variable "X"
var Y = 35;  //Creating variabl "Y"
if (Y > X) {  //Creating an if statement
    document.write("Y is bigger than X" + "<br>");  //Display this if Y is bigger than X
}

function Add_numbers_1() { //Creatining function "Add_numbers_1"
    document.write(15 + X + "<br>");  //Execute "15 + X"
}
function Add_numbers_2() {  //Creating function "Add_numbers_2"
    document.write(Y + 100 + "<br>");  //Execute "Y + 100"
}
Add_numbers_1(); //Calling "Add_numbers_1"
Add_numbers_2(); //Calling "Add_numbers_2"

function Add_numbers_2() { //Function Add_numbers_2
    console.log(B + 100) //Executing "B + 100" causing an error
}