console.log('Hello This is RInkal Patel');
function display(){
    console.log('This is Normal function');
}display();
function parameterized_function(name,age,salary){
    console.log(`${name} ${age} and ${salary}`);
}
parameterized_function('Rinkal Patel',30,35000);

function defalut_parameterized_function(name='AAAAA',age=45,salary=90000){
    console.log(`${name} ${age} and ${salary}`);
}
defalut_parameterized_function();
defalut_parameterized_function('BBBBBB',90,78978779);

console.log('Anonymous function');
let result = function(x,y,z){
    let sum = x+y+z;
    console.log(sum);
}
result(10,20,30);

console.log('Arrow function');
let result1 = (a,b,c) => console.log(a*b*c);
result1(10,20,30);