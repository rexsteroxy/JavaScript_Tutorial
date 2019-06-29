    // toString Method
/*
This converts an array to a string separated by a comma
*/
//let colors = ['blue','green','yellow',45,123];
//console.log(colors.toString());

        //the join method
/*
this is similiar to a string 
but here you can specify the saparator instead of the default coma
*/
//let colors = ['blue','green','yellow',45,123];
//console.log(colors.join('*'));


        //concat method
/*
This method combines two arrays together or add more items to an array and
then return a new array
*/
//let num1 = [1,2,3,4];
//let num2 = [5,6,7,8];
//let merged = num1.concat(num2);
//console.log(merged);


        //push method
/*
This method adds items to the end of an 
array and changes the original array
*/
// let names = ['Amadi','Austin','Chukwuemeka'];
// let updatedNames = names.push('Rexsteroxy','Kizito');
// console.log(names);
// console.log(updatedNames);


        //the pop method
//This method removes the lastitem of an array and returns it
// let names = ['Amadi','Austin','Chukwuemeka'];
// let updatedNames = names.pop();
// console.log(names.pop());
// console.log(updatedNames);

    //the shift method
//this method removes the first item of an array and returns it.
// let names = ['Amadi','Austin','Chukwuemeka'];
// let updatedNames = names.shift();
// console.log(names);
// console.log(updatedNames);

        //the unshift method
//this method adds an item(s) to the beginning of an array and
//changes the original array
// let names = ['Amadi','Austin','Chukwuemeka'];
// let updatedNames = names.push('Rexsteroxy','Kizito');
// console.log(names);
// console.log(updatedNames);



        //the splice method
//this method changes an array by adding ,removing,and inserting elements
//it takes in 3 arguments...the first is the starting index position
//the second is the number of elements to be deleted
//the third is the nth elements you wish to add

// let names = ['Amadi','Austin','Chukwuemeka'];
// let updatedNames = names.splice(0,2,'Rexsteroxy','Kizito');
// console.log(names);
// console.log(updatedNames);

//Note: if the second element which is the delete count 
//is not declared, every element starting
//from the declared index will be deleted


        // the slice method
//this method copies a given part of an array
//and returns that copied part as a new array
//it does not change the original array

// let names = ['Amadi','Austin','Chukwuemeka'];
// let updatedNames = names.slice(0,1);
// console.log(names);
// console.log(updatedNames);


    //the split method
/* this method is used for stings. it divides a string into substrings
and returns them as an array
*/
// let names = 'AmadiAustinChukwuemeka';
// let array_name = names.split(',',4);
// console.log(array_name);
 

        //IndexOf method
/* this method looks for an item in array
and returns the index postion of that array
else it returns -1
*/
// let names = ['Amadi','Austin','Chukwuemeka'];
// let updatedNames = names.indexOf('Austin');
// //console.log(names);
// console.log(updatedNames);

        //lastIndexOf
/*  this works from the same way indexOf does except that 
it works from right to left
*/
// let names = ['Amadi','Austin','Chukwuemeka','kizito'];
// let updatedNames = names.lastIndexOf('Austin');
// console.log(names);
// console.log(updatedNames);


        //filter method
/* this method creates a new array if the items of an array pass 
a certain condition\
*/
// let names = ['Amadi','Austin','Chukwuemeka','kizito'];
// let realMe = names.filter((name)=>{
// if (name === 'Austin'){
//     console.log(name);
// }
// // else{
// //     console.log(name);
// // }
// });
// let realMe = names.filter(name => name === 'Austin');
// console.log(realMe);


        //the map method
/* this method creates a new array by manipulating the values in an array
*/
// let moneyWithoutSymbol = [100,200,300,400,];
// let moneyWithSymbol = moneyWithoutSymbol.map(money => {
//     return "$"+money;
// });
// console.log(moneyWithSymbol);

            //the reduce method
/* this method is good for calculating totals
it is used to calculate a single value based on an array
*/

// const numbers =  [100,200,300,400];
// let sum = 0;
// for(let i=0; i<numbers.length; i++){
//     sum += numbers[i];
// } 
// console.log(sum);
// console.log(numbers.length)

// const numbers =  [100,200,300,400];
// sum = numbers.reduce((acummulator,value)=>
//     acummulator + value
// ,0);

// console.log(sum);

            //The forEach Method
            //used for iterating items in a giving array 
            // const numbers =  [100,200,300,400];
            // let number = numbers.forEach((item)=> console.log(item));

            //the every method
            //This method checks if all items in an arrray
            //pass the specified condition and return true if passed , else false.
            // const numbers =  [100,200,300,400];
            // let greater = numbers.every((item)=>{
            //      return item >= 30;
            // });
            // console.log(greater);


                    // the sum method
                    //This method checks if one items in an arrray
            //pass the specified condition and return true if passed , else false.
            // const numbers =  [100,200,300,400];
            // let greater = numbers.every((item)=>{
            //      return item >= 30;
            // });
            // console.log(greater);


//the include
//checks if the arrays contains a specific item
//and returns true or false

//This method checks if all items in an arrray
            //pass the specified condition and return true if passed , else false.
//             const numbers =  [100,200,300,400];
//             let result = numbers.includes(100);

// console.log(result);











//  let hi = () => {console.log('just do it dot com');}
// hi();

// let names = ['Amadi','Austin','Kizito','Rexsteroxy'];

// names.map(((names) => {console.log(`hello my dear name ${names}`)}))