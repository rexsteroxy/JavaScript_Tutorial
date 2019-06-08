<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <h1 id='head'><center>JAVASCRIPT CALCULATOR APP</center> </h1><br><br>
    <div id="resultDiv">
            
    </div>
        
        <input type="text"  id="num1" placeholder="input firstnumber">
        <select name="" id="operator">
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="/">/</option>
                <option value="*">*</option>
                <option value="%">%</option>
            </select>
           
        <input type="text" id="num2" placeholder="Input secondnumber">
        
        <button id="button">Calculate</button>
        <button id="zoomup">Zoom(+)</button>
        <button id="zoomdown">Zoom(-)</button>
        <button id="reset">Reset</button>
        <script type="text/javascript" src="dom_into.js"></script>
        <!-- <script>
            function emit(){
                alert('Hello World Rexsteroxy has started');
                console.log('Rex is greeting the console as weel');
            }
        </script> -->
</body>
</html>