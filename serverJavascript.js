// Javascript for the SERVER side.

exports.stringLength = function(str){
    return str.length;
};


exports.stringValue = function(str){
    return str + "aabbcc";
};

exports.gpaFinder = function(number,str,number2,str2,number3,str3){
    var new1 = numberChanger(str);
    var new2 = numberChanger(str2);
    var new3 = numberChanger(str3);

  top = new1*Number(number) + new2*Number(number2) + new3*Number(number3);
  bottom = Number(number) + Number(number2) + Number(number3);

  return top/ bottom;
};

numberChanger = function(string){
    if(string=='a' || string=='A'){
        string = 4.0;
    }
    else if(string=='b' || string=='B'){
        string = 3.0;
    }
    else if(string=='c' || string=='C'){
        string = 2.0;
    }
    else if(string=='d' || string=='D'){
        string = 1.0;
    }
    else{
        string = 0;
    }

    return string;
};