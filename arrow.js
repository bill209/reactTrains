var names = ['able', 'bravo', 'charlie'];

names.forEach(function(name){
	console.log("name",name);
});

names.forEach((name) => {
	console.log("name",name);
})

names.forEach((name) => console.log("name",name));

var double = (x) => x * 2;

console.log("double(3)",double(3));

var add1 = (x,y) => x + y;
var add2 = (x,y) => {
	return x + y;
}

console.log("add1(3,4)",add1(3,4));
console.log("add2(9,0)",add2(9,0));
