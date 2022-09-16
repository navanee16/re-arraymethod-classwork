//1 shift()
var shift =[1,2,3,4,5,6];
shift.shift();
console.log(shift);

//2 unshift()
var unshift =[1,2,3,4,5,6];
unshift.unshift(7);
console.log(unshift);

//3 push()
var push =[1,2,3,4,5,6];
push.push(7);
console.log(push);

//4 pop()
var pop =[1,2,3,4,5,6];
pop.pop();
console.log(pop);

//5 tostring()
var string =["1","2","3"];
string.toString();
console.log(string);

//6 includes()
var inc = ["nan","null","hp","dell"];
let x =inc.includes("hp");

//7 foreach()
var forec =[1,2,3,4,5,6];
forec.map(mult=>{
    console.log(mult*2);
})

//8 includes()
var inc =["one","two","three","four"];
let y =inc.includes("two")
console.log("includes()");
console.log(y);

//9 concat()
var con1 =[1,2,3];
var con2 =[4,5,6];
var result =con1.concat(con2);
console.log("concat()");
console.log(result);

//10 valueof()




