var arr1 = [10,20,30,40,50]
var arr2 = [1,2,3,4,5,6]
var arr3 = [1,5,6,7,8,9]
function mainfunction(arr){
var sum = 0;
for (var i=0;i<arr.length;i++){
sum = sum+arr[i]
}
return sum
}
console.log((mainfunction(arr1)));
console.log((mainfunction(arr2)));
console.log((mainfunction(arr3)));