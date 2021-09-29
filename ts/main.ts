// String
let username:string;
// Number
const age: number = 354;
// Boolean
let active: boolean = false;

// let dynamic: boolean | number;
// dynamic = 34234;
let dynamic: boolean | 0 | 1;
dynamic = 1;

// const userType: 'admin' | 'publisher' | 'client' = 'admin'


// Definition Keyword - variable name : variable type = variable value

// Object
let user: {
  name: string;
  email: string;
  password: string;
  age: number;
  active: boolean;
  createdAt: Date;
  notes?: string;
};

// user = {
//   name: "ahmed",
//   email: "ahmed@gmail.com",
//   active: true,
//   age: 31,
//   createdAt: new Date(),
//   password: "123456",
//   notes: "some notes",
// };


// let user = {
//   name: "ahmed",
//   email: "ahmed@gmail.com",
//   active: true,
//   age: 31,
//   createdAt: new Date(),
//   password: "123456",
//   notes: "some notes",
// };


// user = {
//   name: "ali",
//   email: "ali@gmail.com",
//   active: true,
//   age: 33,
//   createdAt: new Date(),
//   password: "123456",
//   notes: "some notes",
// };


// Array

const salaries: number[] = [1234, 13243, 54353];
salaries.push(3543)

const mixArray: (string | number)[] = [];
mixArray.push(342435)
mixArray.push('342435')

let strOrNum: string[] | number[];

strOrNum = [] as number[];
strOrNum.push(34)

strOrNum = [] as string[];
strOrNum.push('dfds')

function sum(a: number, b: number, c: number = 0,  print?: boolean) {
  const result = a + b + c;
  if (print) {
    console.log(result);
  }
  return a + b;
}

sum(10, 20,)


type USER_TYPE = 'admin' | 'publisher' | 'client';

const userType: USER_TYPE = "admin";

let user2: {
  name: string;
  email: string;
  password: string;
  age: number;
  active: boolean;
  createdAt: Date;
  notes?: string;
  type: USER_TYPE;
};


printUserGreets('publisher');


function printUserGreets(type: USER_TYPE) {
  switch (type) {
    case "admin":
      console.log("Hello Admin");
      break;
    case "publisher":
      console.log("Hello Publisher");
      break;
    case "client":
      console.log("Hello Client");
      break;
  }
}