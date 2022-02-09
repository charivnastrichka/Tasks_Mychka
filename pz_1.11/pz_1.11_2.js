function ret_one_num(arr){
    if(arr.length>=3 && arr.length%2!==0){
        const uniq = arr => arr.find((e, i) => arr.indexOf(e) == arr.lastIndexOf(e));
        console.log(uniq(arr));
    }
    else
    console.log("Розір масиву менше 3 або кількість цифр парна");
}

ret_one_num([2,2,2,3,2]);
