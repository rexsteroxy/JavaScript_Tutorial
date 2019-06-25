//immediatly invoked function expression
(function(){
//using strict mode
'use strict';
let form = document.getElementById('form');
document.addEventListener('DOMContentLoaded', ()=>{
//changing the background color with the mousemoves
    let mousemove = document.querySelector('#main');
    mousemove.addEventListener('mousemove',movemouse);
function movemouse(e){
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 470)`;
}
//validation the loop number input
let button = document.getElementById('button');
    let loopinput = document.getElementById('loopNumber');
    button.disabled = true;
    loopinput.addEventListener('change',()=>{
        if(loopinput.value === ''){
            alert('Please fill the first textbox');
            button.focus();
           button.disabled = true;
        }else{
            button.disabled = false;
        }
    
    });

//function for creating the reset button
function CreateReset(){
    let reset=  document.createElement('button');
    reset.className ="btn btn-success";
    reset.id="reset";
    reset.appendChild(document.createTextNode('Reset'));
    form.appendChild(reset);

}



button.addEventListener('click',buttonClick);
//function for creating the input and calculate button
function buttonClick(e){
    e.preventDefault(); 
let loopNumber = parseInt(document.getElementById('loopNumber').value, 10);
let title = document.querySelector('.title');
     var arrayoption = ['A','B','C','D','F'];
    for(let i=0; i<loopNumber; i++){
        let div =  document.createElement('div');
        div.className = "form-group";
    form.appendChild(div);
    let gradeInput =  document.createElement('select');
    let unitInput =  document.createElement('input');
    unitInput.className = 'btn btn-outline-primary mt-sm-2';
    gradeInput.className = `btn btn-outline-primary  `;
    gradeInput.id = `grade${i}`;
    unitInput.id = `unit${i}`;
        for(let o=0; o<arrayoption.length; o++){
            let option = document.createElement('option');
            option.value = arrayoption[o];
            option.text = arrayoption[o];
            gradeInput.appendChild(option);
        }
    unitInput.setAttribute ('required' , 'yes');
    unitInput.setAttribute('placeholder' , 'Enter CourseUnit');
    div.appendChild(gradeInput);
    div.appendChild(unitInput);
    }
    button.style.display="none";
    loopinput.style.display="none";
    title.innerHTML = "Select Your Respective Grade";
//creating the calculate button
    let calculate =  document.createElement('button');
    calculate.className ="btn btn-success";
    calculate.id="calculate";
    calculate.appendChild(document.createTextNode('Calculate'));
    form.appendChild(calculate);
       
    //
    CreateReset();

let calculatebtn = document.getElementById('calculate');

calculatebtn.disabled = true;
let unitvalue= document.getElementById(`unit0`);
            
    unitvalue.addEventListener('change',()=>{
        if(unitvalue.value === ''){
            calculatebtn.focus();
            calculatebtn.disabled = true;
        }else{
            calculatebtn.disabled = false;
        }
    
    });
    calculatebtn.addEventListener('click',gpCal);
function gpCal(e){
        e.preventDefault();
        let grade_array = [];
        let unit_array = [];
        let grade = [];
        
        let gp=0;
        let tg = 0;
        let total_courseunit=0;
        let mgp=0;

        for(let i=0; i<loopNumber; i++){

         grade_array[i] = document.getElementById(`grade${i}`).value;
         unit_array[i] = parseInt(document.getElementById(`unit${i}`).value,10);
         
         total_courseunit= total_courseunit + unit_array[i];
         
         switch(grade_array[i]) {
            case 'A':
            grade[i]=5;
           tg =grade[i] * unit_array[i];
            gp = gp + tg;
            break;
            case 'B':
            grade[i]=4;
           tg =grade[i] * unit_array[i];
            gp = gp + tg;
            break;
            case 'C':
            grade[i]=3;
           tg =grade[i] * unit_array[i];
            gp = gp + tg;
            break;
            case 'D':
            grade[i]=2;
           tg =grade[i] * unit_array[i];
            gp = gp + tg;
            break;
            case 'F':
            grade[i]=0;
           tg =grade[i] * unit_array[i];
            gp = gp + tg;
            break;
            default:
            grade[i]=0;
            tg =grade[i] * unit_array[i];
             gp = gp + tg;
            
        }
        
        }
        
        mgp = Math.round(gp / total_courseunit * 100) / 100;
        let display = document.getElementById("header-title");
        display.innerHTML = `Your GP Calculation IS ${mgp}`;
        alert(`Your GP Calculation IS ${mgp}`);
        }
  let resetbtn = document.getElementById('reset');
  resetbtn.addEventListener('click',()=>{

    
  });           
}                          
});
})();



