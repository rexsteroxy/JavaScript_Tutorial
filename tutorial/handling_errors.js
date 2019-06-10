/* function beforeTryCatch(){
    let number = 6 + undefined / 'paragraph';
    console.log(number.b());
}
beforeTryCatch(); */

/* function afterTryCatch(){
    try{
        let number = 6 + undefined / 'paragraph';
         console.log(number.b());
    }catch(error){
            console.log("lesser error is: "+ error.message);
    }
    finally{
        console.log('this is final test');
    }
    console.log('But my code is still running');
}
afterTryCatch();
 */
function heyerror(){
    let value;
        if(value === undefined){
            //throw new Error('please is the function defined');
            
        }
        else{
            console.log('you are right');
        }

}
heyerror();
