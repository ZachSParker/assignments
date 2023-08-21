function alwaysHungry(arr){
    var count = 0;
    for(var i =0;i<arr.length;i++)
    {
        if(arr[i]=="food"){
            console.log("yummy");
            count++;
        }
        
    }
    if(count == 0){
        console.log("I'm Hungry")
    }
}
function highPass(arr,cutoff){
    var filteredArr =[];
    for(var i=0;i<arr.length;i++){
        if(arr[i] > cutoff)
        {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
// var result = highPass([6.8,3,10,-2,5,9],5)
// console.log(result);
function betterThanAverage(arr){
    var sum = 0;
    var average = 0;
    var count = 0;
    for(var i = 0;i<arr.length;i++){
        sum+= i;
    }
    average = sum / arr.length;
    for(var i = 1;i<arr.length;i++){
        if(arr[i] > average){
            count++;
        }
    }
    return count;
}
// var result = betterThanAverage([6,8,3,10,-2,5,9]);
// console.log(result);
function reverse(arr){
    
    return arr;
}
