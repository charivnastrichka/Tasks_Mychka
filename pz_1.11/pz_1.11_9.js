function reverse(arr){
    result=arr.map(function(elem){
        if(typeof(elem)=="number")
        return elem * elem;
        else
        return elem;
    });
    console.log(result.reverse());
    };
    

let arr=["3",2,3,4,5,6,7];
reverse(arr);