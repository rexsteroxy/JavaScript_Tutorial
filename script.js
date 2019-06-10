(function(){
    //using strict mode javascript
    "use strict";
//defining my general counter
    var counter = 2;
//defining my constant colors
    const colors = [
        {name: 'addition', value:'#e74c3c'},
        {name: 'subtraction', value:'#2980b9'},
        {name: 'division', value:'#2c1e7b'},
        {name: 'multiplication', value:'#fc1e10'},
        {name: 'modulo', value:'#e423a6'},
        {name: 'background', value:'#f2e1a1'},

    ];


//function for increamenting counter
function incrementCounter(){
    counter ++;
}
//function for decreamenting counter
function decrementCounter(){
        counter --;
}
//function for zooming out
function zoomup(){
    let answer = document.getElementById('resultDiv');
    answer.style.fontSize = counter + 'em';
}
//function for zooming in
function zoomdown(){
    let answer = document.getElementById('resultDiv');
    answer.style.fontSize = counter + 'em';
}
//function for defaultDisplay
function defaultDisplay(text){
        let answer = document.getElementById('resultDiv');
        answer.innerHTML = text;
        answer.style.fontSize = counter + 'em';
        answer.style.color = colors[2].value ;
        answer.style.backgroundColor = colors[5].value ;

        let timeId = document.getElementById('time');
        setInterval(()=>{
            let time = new Date();
            let hours = time.getHours();
            let minutes = time.getMinutes();
            let ampm = " AM"
            if(hours >= 12){
            hours -= 12;
            ampm = " PM";
            }else if(hours === 0){
                hours = 12;
                ampm = " AM";
            }
            if(minutes < 10){
                minutes = '0' + minutes;
            }
            var sepClass = '';
            if(time.getSeconds() % 2 === 1)
                sepClass = 'trans';
            var sep ='<span class="' + sepClass + '">:</span>';
            let month = ['January','Febuary','March',
            'April','May','June','july','August',
            'September','October','November','December'];
            timeId.innerHTML ='TIME: '+ hours + sep + time.getMinutes()
            +':'+time.getSeconds() + ampm +' '+ 'DATE: '+ month[time.getMonth()]+':'+time.getDate();
        
        },1000);
        
        
        timeId.style.fontSize = counter + 'em';
        timeId.style.color = colors[2].value ;
        timeId.style.backgroundColor = colors[5].value ;
        /* timeId.style.margin = "auto";
        timeId.style.padding = "50px";
        timeId.style.height = "30px";
        timeId.style.width = "30px";
        timeId.style.float = "right"; */


        let num1 = document.getElementById('num1');
        let num2 = document.getElementById('num2');
        let signd = document.getElementById('operator');
        let zoomup = document.getElementById('zoomup');
        let zoomdown = document.getElementById('zoomdown');
        let button = document.getElementById('button');
        let reset= document.getElementById('reset');
        let head = document.getElementById('head');

        head.style.backgroundColor = colors[1].value ;

        num1.style.margin = "30px"; num2.style.margin = "30px"; num1.style.padding = "10px"; num2.style.padding = "10px";
        signd.style.padding = "10px"; zoomup.style.margin = "30px";zoomdown.style.margin = "30px";button.style.margin = "30px";
        zoomdown.style.padding = "10px";zoomup.style.padding = "10px";button.style.padding = "10px"; reset.style.margin = "30px";
        reset.style.padding = "10px";
    }
//getting my button id for calculation
        var calculateButton = document.getElementById('button');
//listening to load event once the page is refreshed

//this is a function for calculation display
function display(result){
    let answer = document.getElementById('resultDiv');
    answer.innerHTML = result;
     let sign = document.getElementById('operator').value;

    switch(sign){
        case "+":
        answer.style.color = colors[0].value ;
        answer.style.backgroundColor = colors[5].value ;
        break;
        case "-":
        answer.style.color = colors[1].value ;
        break;
        case "/":
        answer.style.color = colors[2].value ;
        break;
        case "*":
        answer.style.color = colors[3].value ;
        break;
        case "%":
        answer.style.color = colors[4].value ;
        break;
        default:
        answer.style.color = colors[2].value ;
    }
    
} 
    

//this is the function that will do the calculation
function calculate(){

        let num1 = document.getElementById('num1');
        let num2 = document.getElementById('num2');
        let sign = document.getElementById('operator');
    
    if(num1.value === ''){
        alert('Please fill the first textbox');
        num1.focus();
    }else if( num2.value === ''){
        alert('Please fill the second textbox');
        num2.focus();
    }
    switch(sign.value){
        case "+":
            let sum = parseInt(num1.value,10) + parseInt(num2.value,10);
            display(`Your result is: ${sum}`);
            //alert(`Your result is: ${sum}`);
            break;
            case "-":
            let sub = parseInt(num1.value,10) - parseInt(num2.value,10);
            display(`Your result is: ${sub}`);
            break;
            case "*":
            let mul = parseInt(num1.value,10) * parseInt(num2.value,10);
            display(`Your result is: ${mul}`);
            break;
            case "/":
             let div = parseInt(num1.value,10) / parseInt(num2.value,10);
            display(`Your result is: ${div}`);
            break;
            case "%":
            let modulo = parseInt(num1.value,10) % parseInt(num2.value,10);
            display(`Your result is: ${modulo}`);
            //display('That could be a modulo operator');
            break;
            default:
            defaultDisplay('Fill the empty textbox');

    }  
}


//listening to the Dom for refresh
    document.addEventListener('DOMContentLoaded', ()=>{
//function for default display once page loads
        defaultDisplay('Your Result Will Display Here');

//disabled the button once inputs are empty
        calculateButton.disabled =  true;
//listening to input change
            let num1 = document.getElementById('num1');
            let num2 = document.getElementById('num2');
           
        num1.addEventListener('change', ()=>{
            if(num1.value === '' && num2.value === ''){
                calculateButton.disabled =  true;
            }else{
                calculateButton.disabled =  false;
            }
        });
    });
//listening to calculate button for its function
    calculateButton.addEventListener('click', ()=>{
        calculate();
    });
//getting and listening to reset button for its function
    let myReset = document.getElementById('reset');
    myReset.addEventListener('click', ()=>{
        defaultDisplay('Your Result Will Display Here');
        document.getElementById('num1').value='';
        document.getElementById('num2').value='';
        
    });
//getting and listening to zoomup button for its function
    let myZoomButton = document.getElementById('zoomup');
    myZoomButton.addEventListener('click', ()=>{
        incrementCounter();
        zoomup();
    });
//getting and listening to zoomdown for its function
    let myZoomButton2 = document.getElementById('zoomdown');
    myZoomButton2.addEventListener('click', ()=>{
        if(counter <= 2){
           counter = 2;
        }
        else{
            decrementCounter();
            zoomdown();
        }
            
    });


})();