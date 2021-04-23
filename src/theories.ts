import * as test from "./test.js";

class Human{
  name: string;
  age: number;
  gender: string;
  constructor(name: string, age: number, gender: string){
      this.name = name;
      this.age = age;
      this.gender = gender;
  }
}
const kim = new Human("kim", 18, "male");

const sayHi = (personA: Human): string => {
  return `Hi ${personA.name}, you are ${personA.age}, and you are a ${personA.gender}!`;
};

console.log(sayHi(kim));

test.Test();

export{};