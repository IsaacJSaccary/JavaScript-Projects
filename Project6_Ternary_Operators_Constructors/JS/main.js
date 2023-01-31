function Taco_Function() { //Taco Function
    var Tacos, Quantity; //Variables "Tacos" and "Quantity"
    Tacos = document.getElementById("Tacos").value; //Returning "Tacos" + "value"
    Quantity = (Tacos < 6) ? "Good choice!" : "Are you sure you can eat that many?"; //If lower than 6 return the first sentence, if higher than 6 return the second sentance
    document.getElementById("More").innerHTML = Quantity; //Return "More"
}

function People(Age, Gender, Address, Occupation) { //The People function
    this.People_Age = Age;  //Object "Age"
    this.People_Gender = Gender;  //Object "Gender"
    this.People_Address = Address;  //Object "Address"
    this.People_Occupation = Occupation;  //Object "Occupation"
}

var Samantha = new People("26", "Female", "1777 Foridge Rd", "Hair Dresser"); //Assigning objects to the variable
var Ryan = new People("25", "Male", "3454 Dango St", "Sales Associate");  //Assigning objects to the variable
var Timothy = new People("35", "Male", "57 Tin Lane", "Ryan's Boss");  //Assigning objects to the variable
function myFunction() {
    document.getElementById("Stuff_and_Things").innerHTML = "Timothy is a " + Timothy.People_Age + " year old " + Timothy.People_Gender + ", who lives at " + Timothy.People_Address + ", and is " + Timothy.People_Occupation; //Return the paragraph "Stuff_and_Things" along with the other sentences and objects assigned
}

function count_Function() { //Creating function "count_Function"
    document.getElementById("Counting").innerHTML = Count(); //Calling the "Counting" id
    function Count() { //Creating function "Count"
        var Staring_point = 655; //Creating the variable "Staring_point"
        function Plus_some() {Staring_point += 2444;} //Creating function "Plus_some" to add to "Staring_point"
        Plus_some(); //Calling "Plus_some"
        return Staring_point; //Returning the number after adding "Starting_point" and "Plus_some"
    }
}


