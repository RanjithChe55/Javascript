var str = '({"fname" : "Ranjith", "lname" : "Kumar"})';

var obj = eval(str);

document.write(obj.fname + " " + obj.lname);