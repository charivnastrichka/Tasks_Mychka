function Check(a){

        let inform;
        inform=a>=0 ? "позитивне":"негативне";
    

      if(a){
        if (a < 2) {
          return 'Число должно быть больше 1';
        } else if (a === 2) {
          console.log ('Просте число');
        }
      
        let i = 2;
        const limit = Math.sqrt(a);
        while (i <= limit) {
          if (a % i === 0) {
         console.log('не просте число');
          }
          i +=1;
        }
        
        console.log ('Просте число');
    }
console.log(inform);
   
}
Check(4);