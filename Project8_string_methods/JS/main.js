function conc_Method() {
    var part_1 = "I am ";
    var part_2 = "really enjoying ";
    var part_3 = "this program I ";
    var part_4 = "have learned a lot.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Conc").innerHTML = whole_sentence;
}

function Slice_Method() {
    var Sentence = "If I had one million dollars, I could buy my grades.";
    var Section = Sentence.slice(12,20);
    document.getElementById("Slice").innerHTML = Section;
}

function String_Method() {
    var X = 6665555;
    document.getElementById("Numbers_Method").innerHTML = X.toString();
}

function precision_Method() {
    var X = 1547.6579879354239871;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}