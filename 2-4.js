function map(allArr){
    var newArr=[];
for(var i =0; i< allArr.length; i++){
    newArr.push(Math.pow(allArr[i], 2));
}
 console.log("checking newArr",newArr)
}

map([3,6,7,8])