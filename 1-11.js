function reverse_a_value(value){
value = value +""
return value.split('').reverse().join('');
}console.log("the reverse of a value is "+reverse_a_value("abcd"));