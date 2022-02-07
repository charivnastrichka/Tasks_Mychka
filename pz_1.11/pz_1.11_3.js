function sort_arrey(arr1){
    const notTwoDimArr= arr =>arr.reduce(function(a, b) {
    return ( a.concat(b));
    });
    arr1=notTwoDimArr(arr);
    arr1.sort(function(a,b){
        return a-b })
        console.log(arr1);
}
 
let arr=[[1,32,45,9,5,6,7],[21,11,22,4,3],[33,45,66]]; 
sort_arrey(arr);
 