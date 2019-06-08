var counter = (function(){
    let value ;

    function echo(message){
        console.log(message +'----- '+ value)
    }
    function setCount(count){ value = count;}
    function getCount(){ return value;}

    function setIncreament(){
        value += 1;
        echo('After increment');
    }

    function setDecreament(){
        value -= 1;
        echo('After decrement');
    }

    function setReset(){  value = 0 ;
        echo('After reset')}

    return{
       set: setCount,
       get:getCount ,
        increment:setIncreament ,
        decrement:setDecreament ,
        reset: setReset
    }

})();
counter.set(2);
counter.increment();
counter.increment();
counter.increment();

console.log(counter.get());

counter.decrement();
counter.decrement();
counter.decrement();

console.log(counter.get());
counter.reset();
console.log(counter.get());