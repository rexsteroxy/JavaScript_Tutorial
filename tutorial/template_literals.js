 function giveMeCount(){ return 1};

 let interpolation = `Give me ${ ( giveMeCount() == 1) 
    ? 'one reason' : 'few reasons'} 
 to try this`;
 console.log(interpolation);