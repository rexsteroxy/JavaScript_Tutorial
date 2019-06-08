function hello(){
    return'print out here';
}
console.log(hello());

function comeBack(){
    return function(){
        let result = 4 + 5;
        return result;
    }
}

let add = comeBack;
console.log(add()());
