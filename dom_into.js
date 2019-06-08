(function(){
    let counter = 3;

    function defaultDisplay(text){
        let answer = document.getElementById('resultDiv');
        answer.innerHTML = text;
        answer.style.fontSize = counter + 'em';
        answer.style.color = colors[2].value ;
        answer.style.backgroundColor = colors[5].value ;


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

    const colors = [
        {name: 'addition', value:'#e74c3c'},
        {name: 'subtraction', value:'#2980b9'},
        {name: 'division', value:'#2c1e7b'},
        {name: 'multiplication', value:'#fc1e10'},
        {name: 'modulo', value:'#e423a6'},
        {name: 'background', value:'#f2e1a1'},

    ];
    function incrementCounter(){
        counter ++;
    }
    function decrementCounter(){
            counter --;
    }
    function zoomup(){
        let answer = document.getElementById('resultDiv');
        answer.style.fontSize = counter + 'em';
    }
    function zoomdown(){
        let answer = document.getElementById('resultDiv');
        answer.style.fontSize = counter + 'em';
    }
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
        // console.log(answer)
        //answer.style.fontSize = 2 + 'em';
        // console.log(answer);
        let num1 = document.getElementById('num1');
        let num2 = document.getElementById('num2');
        let signd = document.getElementById('operator');
        let zoomup = document.getElementById('zoomup');
        let zoomdown = document.getElementById('zoomdown');
        let button = document.getElementById('button');
        let reset= document.getElementById('reset');

        num1.style.margin = "30px"; num2.style.margin = "30px"; num1.style.padding = "10px"; num2.style.padding = "10px";
        signd.style.padding = "10px"; zoomup.style.margin = "30px";zoomdown.style.margin = "30px";button.style.margin = "30px";
        zoomdown.style.padding = "10px";zoomup.style.padding = "10px";button.style.padding = "10px"; reset.style.margin = "30px";
        reset.style.padding = "10px";
       
        
    }
    
    function calculate(){
        let num1 = document.getElementById('num1').value;
        let num2 = document.getElementById('num2').value;
        let sign = document.getElementById('operator').value;

        if(num1 === ''){
            alert('Please fill the first textbox');
        }else if( num2 === ''){
            alert('Please fill the second textbox');
        }
       
        switch(sign){
            case "+":
                let sum = parseInt(num1,10) + parseInt(num2,10);
                display(`Your result is: ${sum}`);
                //alert(`Your result is: ${sum}`);
                break;
                case "-":
                let sub = parseInt(num1,10) - parseInt(num2,10);
                display(`Your result is: ${sub}`);
                break;
                case "*":
                let mul = parseInt(num1,10) * parseInt(num2,10);
                display(`Your result is: ${mul}`);
                break;
                case "/":
                let div = parseInt(num1,10) / parseInt(num2,10);
                display(`Your result is: ${div}`);
                break;
                case "%":
                let modulo = parseInt(num1,10) % parseInt(num2,10);
                display(`Your result is: ${modulo}`);
                //display('That could be a modulo operator');
                break;
                default:
                defaltDisplay('please input numbers');

        }  
    }

    let myButton = document.getElementById('button');
    myButton.addEventListener('click', ()=>{
        calculate();
    });
    let myZoomButton = document.getElementById('zoomup');
    myZoomButton.addEventListener('click', ()=>{
        incrementCounter();
        zoomup();

    });
    let myZoomButton2 = document.getElementById('zoomdown');
    myZoomButton2.addEventListener('click', ()=>{
        if(counter <= 3){
           counter = 3;
        }
        else{
            decrementCounter();
            zoomdown();
        }
            
    });
    let myReset = document.getElementById('reset');
    myReset.addEventListener('click', ()=>{
        defaultDisplay('YOUR RESULT WILL DISPLAY HERE');
        document.getElementById('num1').value=0;
        document.getElementById('num2').value=0;
        
    });
    defaultDisplay('YOUR RESULT WILL DISPLAY HERE');
})();
