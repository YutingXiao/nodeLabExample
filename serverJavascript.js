// Javascript for the SERVER side.

exports.stringLength = function(str){
    return str.length;
};


exports.stringValue = function(str){
    return str + "aabbcc";
};

exports.gpaFinder = function(number,str,number2,str2,number3,str3){
  new1 = numbergrade(str);
  new2 = numbergrade(str2);
  new3 = numbergrade(str3);

  gpa = ((new1*number + new2*number2 + new3*number3)/(number+number2+number3));

  return gpa;
};

var numbergrade = function(input){
    switch (input){
        case "a"||"A":
            input = 4.0;
            break;
        case "b"||"B":
            input = 3.0;
            break;
        case "c"||"C":
            input = 2.0;
            break;
        case "d"||"D":
            input = 1.0;
            break;
        case "f"||"F":
            input = 0.0;
            break;
    }
    return input;
}