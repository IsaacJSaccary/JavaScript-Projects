function addMath() {
    var addition = 65 + 78; //This line creates the addition problem
    document.getElementById("Math").innerHTML = "65 + 78 = " + addition; //This line makes it possible to show the addition problem

    var subtraction = 655 - 333;  //This line creates the subtraction problem
    document.getElementById("Math2").innerHTML = "655 - 333 = " + subtraction; //This line makes it possible to show the sutraction problem

    var simple_Math = 44 * 23;  //This line creates the multiplication problem
    document.getElementById("Math3").innerHTML = "44 x 23 = " + simple_Math; //This line makes it possible to show the multiplication problem

    var simple_Math = 455 % 8;  //This line creates the dividing problem
    document.getElementById("Math4").innerHTML = "When you divide 455 by 8 you have a remainder of: " + simple_Math; //This line makes it possible to show the dividing problem

}

    var X = 15;
    X++
    document.write(X);
 
    var Y = 17;
    Y--
    document.write(Y);

    window.alert(Math.random() * 100)