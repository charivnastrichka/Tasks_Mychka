function return_arr(n){
    let arr=[];
    let m=n;

    for(let i=0;i<n;i++)
    {
        arr[i]=m;
        m--;
    }
    console.log(arr);
}
 return_arr(7);
