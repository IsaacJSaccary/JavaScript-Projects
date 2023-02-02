function conc_Method() { //function "conc_Method"
    var part_1 = "I am "; //variable part_1
    var part_2 = "really enjoying "; //variable part_2
    var part_3 = "this program I "; //variable part_3
    var part_4 = "have learned a lot."; //variable part_4
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //variable whole_sentence
    document.getElementById("Conc").innerHTML = whole_sentence; //display "Conc" with "whole_sentence"
}

function Slice_Method() { //function Slice_Method
    var Sentence = "If I had one million dollars, I could buy my grades."; //variable Sentence
    var Section = Sentence.slice(12,20); //Variable Section
    document.getElementById("Slice").innerHTML = Section; //Display "Slice" and "Section"
}

function String_Method() { //function "String_Method"
    var X = 6665555; //variable X
    document.getElementById("Numbers_Method").innerHTML = X.toString(); //Display "Numbers_Method" and "X.toString"
}

function precision_Method() { //function precision_Method
    var X = 1547.6579879354239871; //variable X
    document.getElementById("Precision").innerHTML = X.toPrecision(10); //Display "Precision" and "X.toPrecision"
}