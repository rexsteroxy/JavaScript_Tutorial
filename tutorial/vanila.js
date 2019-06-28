// (function(){
//     'use strict';
    //Accessing the document object ,properties and methods
//console.log(document);
// console.dir(document);
//console.log(document.title);
//console.log(document.all);

    //Accessing elements in th dom
//var header = document.getElementById('main-header');
//header.textContent = 'this does not pay attention to the style';
//header.innerText = 'this pays attention to the styling';
//header.innerHtml = '<h2>put a h2 tag into the header</h2>;
//header.style.borderBottom = ' red solid 1px';

//getElementsByClassName();
//getElementsByTagName();
//querySelector('uses css selectors');
//querySelectorAll('uses css selectors' li:nth-child(3),firstchild,lastchild);
    
    //TRAVASING THE DOM
//parentNode
//parentElement
//childNodes
//children
//firstChild and lastChild// useless lolz
//firstElementChild and lastElementChild

//nextSibling and previousSibling
//nextElementSibling and previousElementSibling

    //Creating an element
//var newDiv=document.createElement('div')
//newDiv.className = 'hello';
//newDiv.id = 'id'
//  setting attibutes
//newDiv.setAttributes('placeholder','enter your name');
//appendChild
//insertBefore

 

    //listening to Events
/*
click
dbclick
mousedown
mouseup
mouseenter --- for parentElement
mouseleave --
mouseover  -- for innerElement
mouseout
mousemove\
keydown --- e.target.value
keyup
keypress
focus
blur
cut
paste
input
change
submit
*/

// let button = document.getElementById('button');
// button.addEventListener('click',buttonClick);
// 
// function buttonClick(e){
// console.log(e.target.id)
// console.log(e.offsetY)
//console.log(e.offsetX)
//console.log(e.clientY)
//console.log(e.clientX)
// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);
// }


    // var button = document.getElementById('loop').addEventListener
    // ('click', buttonClick);
    
    // function buttonClick(e){
    //     console.log(e);
    // }
        /* var loopButton = document.getElementById('loop').addEventListener('click',()=>{
            let loopNumber = parseInt(document.getElementById('loopNumber').value, 10);
            let totalBox = loopNumber * 2;
            let coursesDiv = document.getElementById('courses');
            let gradeDiv = document.getElementById('grade');
            for(let i=0; i<totalBox; i++){
                let input =  document.createElement('input');
                input.className = ` class="input-group" `;
                coursesDiv.appendChild(input);
                let unknown =  totalBox / 2;
                    if(i >= unknown){
                        input.id = `item${i}`;
                        gradeDiv.appendChild(input);
                        
                    }
                
                
            } 

//validating unit input using calculate button
calculatebtn.disabled = true;
let unitvalue = [];
for(let v=0; v<=loopNumber; v++){

    unitvalue[v]= document.getElementById(`unit${v}`);
    console.log(unitvalue[v]); 
    unitvalue[v].addEventListener('keyup',()=>{
        if(unitvalue[v].value === ''){
            calculatebtn.focus();
            calculatebtn.disabled = true;
        }else{
            calculatebtn.disabled = false;
        }
    
    });   
}


            
        });*/
    // })();