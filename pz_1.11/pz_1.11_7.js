function random_double_array(a,b){
    arr=[];
    min= -99;
    max= 99;
    for(i=0;i<a;i++){
        arr[i]=[];
        for(j=0;j<b;j++){
            arr[i][j]=Math.floor(Math.random()*(max-min+1 ))+min;
            // document.write(arr[i][j] + " ");
        }
        // document.write("<br>");
    }
    // document.write("\n ");
    for(i=0 ; i < arr.length ; i++ ){
        for(j=0;j<arr[i].length;j++){
            if(i==j){
                if(arr[i][j]<0)
                    arr[i][j]=0;
                else
                    arr[i][j]=1;      
            }
            document.write(" " + arr[i][j]);
        }
        document.write("<br/>");
    }

}

random_double_array(5,5);