// function timeout(){
//     setTimeout(function(){
//         for(i=0; i< 3; i++){
//             let a = i;
//             ++a;
//             console.log(a);
//         }
//         timeout()
        
//     },2000);
// }
// timeout();
 
//immediately invoked function expression
(function(){
    console.log('hello @ iife');
})();