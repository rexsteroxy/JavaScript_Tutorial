//this can be determined by how a function is called

function print(){
     return console.log(this.firstname +' '+ this.lastname);
}

let customer1 = {
    firstname: 'Amadi',
    lastname: 'Austin',
    display : print
}

let customer2 = {
    firstname: 'Emeto ',
    lastname: 'Winner',
    display : print
}

customer1.display();
customer2.display();