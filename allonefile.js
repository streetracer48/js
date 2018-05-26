// var name ='wasif miraz'
// var age =23
// var skill =['java','php','javascript']
// console.log(name);

// //js Data type: Number, Boolean,String, undefiend, Null, array ,object, function

// var something
// var anything =null
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof skill)
// something
// anything
// console.log(something === anything)
// const age=22

// *Condition

// if(age>18)
// {
//     console.log('yes i am eligiable')

// }
// else {
//     console.log('no')
// }

// *loop

// var name='this is miraz';

// // console.log('hello :'+name)
// for (var i=0; i<5; i++)
// {
//     console.log('hello:' +name);

// }

// *Arry Data In signle Variable

// var address = [];

// address[0] ='name :tanvir',
// address[1]='thana:dhaka nikunja',
// address[2]='postcode:3234'


// //console.log(address)
// // *go to for loop to uppercase
// for (var i=0; i<address.length; i++)
// {
//     // console.log(address[i].toUpperCase());

// }
// // console.log(address.length);
// // console.log(address[address.length-1])
// // console.log(address.indexOf('thana:dhaka nikunja'))
// address[address.length]='added this one please';
// ///console.log(address)
// //console.log(address[address.length-1]);
// address.push('this is last one')
// //console.log(address)
// // *sort
// var sortedarray=address.sort()
// //console.log(sortedarray);
// // *delete

// address.splice(2,1,);

// // console.log(address);
// // *Replace
//  address.splice(2,1,'i want Replace' )
// // console.log(address);
// // *Function
// function add(a,b)
// {
//     return a+b;

// }
// console.log(add(12,45))

// var sum=function(a,b)
// {
//     return a+b;
// }
// const summation=sum;
// console.log(sum(12,43))
// console.log(summation(45,34));
constructor()
{
    this.state = {
        address:
        {
            name:'miraz',
            RoadNO:'4',
            houseno:''





        }


    }

}

var skill =['java','c++','PHP','Python','Laravel','Reatjs','Bootstrap4']

skill.forEach(skillnames => {
console.log(skillnames.toLocaleLowerCase);


})




