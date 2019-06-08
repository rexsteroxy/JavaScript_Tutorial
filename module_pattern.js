var counter = (function(){
        let value ;

        function echo(message){
            console.log(message +'----- '+ value)
        }
        return{
           set: function(count){ value = count;},
           get: function(){ return value;},
            increment: function(){
                value += 1;
                echo('After increment');
            },
            decrement: function(){
                value -= 1;
                echo('After decrement');
            },
            reset: function(){  value = 0 ;
                    echo('After reset')}
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

//note therefore in this iife module pattern
//only the return object properties are accessible from the outside
//but other declaration can be accessed in the returning object