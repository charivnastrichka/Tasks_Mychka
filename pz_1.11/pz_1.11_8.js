function calculate(arr){
    sum=0;
    for(let i=0;i<arr.length;i++)
        sum+=arr[i];
    console.log("Середнє арифметичне масива: " + sum/arr.length);
}
let arr=[1,3,5,6,7,98,23,444];
calculate(arr);