function my_Dictionary() { //Creates my function
    var Car = {                 //My variable "Car"
        Model:"Cheverolet",     //Key "Model" Object "Cheverolet"
        Make:"Cruze",     //Key "Make" Object "Cruze"
        Color:"Twisted Silver",    //Key "Color" Object "Twisted Silver"
        Year:"2022",    //Key "Year" Object "2022"
        Sound:"Vroom!"   //Key "Sound" Object "Vroom! "
    };
    delete Car.Model; //Delete statement
    document.getElementById("Dictionary").innerHTML = Car.Model;  //Document Object Model
}