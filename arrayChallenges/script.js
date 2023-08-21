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
    var index = 0;
    var revIndex = arr.length - 1;
    while(index < revIndex){
        var temp = arr[index];
        arr[index] = arr[revIndex];
        arr[revIndex] = temp;
        index++;
        revIndex--;
    }
    return arr;
}
// console.log(reverse([1,2,3,4,5]));
function fibonacciArr(n){
    let fibArr = [0,1]
    for(var i = 2;i < n;i++){
        fibArr[i] = fibArr[i-1] + fibArr[i-2];
    }
    return fibArr;
}
console.log(fibonacciArr(9));