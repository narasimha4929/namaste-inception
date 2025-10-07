let username:string;
let a:string | number = 24;

a="34";

let hobbies:string[]|number[] =["read","write"];
// hobbies.push(12);
// let users:(string|number)[];

let users:Array<string|number>;


let user2 :{
  name:string,
  age:number,
  hobbies:string[],
}={
  name:"king",
  age:20,
  hobbies:["read","write"]
}

let val :{} = "king"

users=[1,2,3,"4"];

let possibleresults:[number,string]

possibleresults = [1,"2"];

const king =(queen:string,price:number=30)=>{
  console.log(queen,price);
}

let data: Record<string,number|string>;

data ={
  king:2,
  "string":"king",
}

enum Role{
  Admin=4,
  Editor,
  Guest,
}

let username4 : Role = 6;