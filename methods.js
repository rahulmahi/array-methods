//at()

 let arr1 = [1,2,3,4,5];

//let index = -2;

  b = arr1.at(2);

  let index = arr1.at(-3)

  console.log(index);

 //concat()

  let arr2 = [2,3,4,5];

  let arr3 = [5,6,7,8];

  let joined = arr2.concat(arr3);

  console.log(joined);

 //copywithin()

  let arr4 = ["blue","red","white","green","yellow","orange"];

  let z1 = arr.copyWithin(2,0);

  console.log(z1);

//fill()

 let fruits = ["apple","banana","mango"];

  let d = fruits.fill("cherry",1);

  console.log(d);

//foreach()

 let numbers = [1, 3, 4, 9, 8];

 function computeSquare(element) {
      console.log(element+1);
  } 
  numbers.forEach(computeSquare);

//includes()

 let array = ["java","c","c++"];

 let val = arr.includes("java");

 console.log(val);

//index of

 let arr = ["blue","red","orange","red"];

 let z = arr.indexOf("orange");

 console.log(z);

