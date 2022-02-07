function Add(a,b){
    if(a,b!=undefined&&typeof(b,a)!="string")
    console.log(a+b);
    else
     console.log("Enter 2 numbers");
}
function Sub(a,b){
    if(a,b!=undefined&&typeof(b,a)!="string")
    console.log( a-b);
    else
    console.log("Enter 2 numbers");
}
function Mul(a,b){
    if(a,b!=undefined&&typeof(b,a)!="string")
    console.log( a*b);
    else
    console.log("Enter 2 numbers");
    
}
function Div(a,b){
    if(a , b != undefined && typeof(b,a) != "string" && a,b != 0)
    console.log(a/b);
    else if(a == 0 || b == 0)
    console.log("Числа не мають бути 0")
    else
    console.log("Enter 2 numbers");
   
}
function Calc(a,b,operation){
    if(operation==Add){
        return Add(a,b);
    }
    if(operation==Sub){
        return Sub(a,b);
    }
    if(operation==Mul){
        return Mul(a,b);
    }
    if(operation==Div){
        return Div(a,b);
    }
}
 Calc(6,30,Div);