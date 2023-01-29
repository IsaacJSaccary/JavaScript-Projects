function compare_Function() {
    document.write(typeof "Word");
    
    
    var exp= 'Hello World';
    document.write("<br>");


    document.write(exp);
    document.write("<br>");
    
    
    X = 65;
    Y = 78;
    
    document.write(X == Y);
    document.write("<br>");
    
    document.write(Y === X);
    document.write("<br>");
    
    document.write(Y > X);
    document.write("<br>");
    
    document.write(Y < X);
    document.write("<br>");

    document.write(Y > X && Y <= X);
    document.write("<br>");

    document.write(X > Y || Y > X);
    document.write("<br>");

    document.write(!(X > Y));
}