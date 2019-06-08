//note an array is used for a collection of same or different datatypes
//an object is used for a collection of attributes of a particular data type
 let Rex = {
     firstname: 'Amadi',
     middlename: 'Chukwuemeka',
     lastname: 'Austin',
     age: 88,
     school: 'imsu',
     describr: function(){
         console.log('Rex your name is: '+this.firstname
         +' '+this.middlename+' '+this.lastname+' and your age is :'
         +this.age+'  he is schooling at: '+this.school)
     }
 }
 Rex.describr();