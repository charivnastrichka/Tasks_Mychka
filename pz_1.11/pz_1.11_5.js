function Check(a){

        let inform;
         let prost;
         let mul=" ділитья без залишку на:";
         let arr_mul=[2,5,3,6,9];
        inform=a>=0 ? "позитивне":"негативне";
    

      if(a){
        if (a < 2) {
         console.log( 'Число має бути більше 1, щоб визначити,чи воно просте');
        } else if (a === 2) {
          prost= 'просте число';
        }
      
        let i = 2;
        const limit = Math.sqrt(a);
       
        while (i <= limit) {
          if (a % i === 0 && prost!= 'Просте число') {
         prost='не просте число';
          }
          i +=1;
        }
        if(prost=='не просте число')
        prost= 'просте число';

        mul+=a%2==0 ? " 2":""; 
        mul+=a%5==0 ? " 5":""; 
        mul+=a%3==0 ? " 3":""; 
        mul+=a%6==0 ? " 6":""; 
        mul+=a%9==0 ? " 9":""; 

    }
console.log(inform +", "+ prost + ", яке"+ mul);
   
}
Check(45);