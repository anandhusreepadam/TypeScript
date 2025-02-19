//      Infer types (Implicit Types)
//----------------------------------------//

// let userName = "Text";
// userName = 0;
//let salary = 20_000;
//salary = 'good'



//    Defining Types (Explicit Types)
//---------------------------------------//

// let userName: string = 'Text';
// let salary: number = 20_0000;
// let isSalaried:boolean = true;
// let skills:string[] = ['js','css','ts'];
// let emptyArray:[] = [];
// let userDetail:{name:string,age:number} = {
//     name:'john',
//     age:23,
// };

//        Interface
//--------------------------//

// interface Details {
//     name: string;
//     age:number;
//     salary:number;
//     getName:()=>void;
// }

// let userDetail: Details = {
//     name: 'john',
//     age: 23,
//     salary: 300,
//     getName() {
//         console.log(this.name);
//     },
// };

// let adminDetail: Details = {
//     name: 'john',
//     age: 23,
//     salary: 300,
//     getName() {
//         console.log(this.name);
//     },
// };



//          Type
//--------------------------//

// type Details={
//     name: string;
//     age: number;
//     salary: number;
//     getName: () => void;
// };

// let adminDetail: Details = {
//     name: 'john',
//     age: 23,
//     salary: 300,
//     getName() {
//         console.log(this.name);
//     },
// };


//           Union/Optional
//---------------------------------//

// type Details={
//     name: string;
//     age: number | string;
//     salary: number;
//     getName?: () => void;
// };

// let adminDetail: Details = {
//     name: 'john',
//     age: '23',   ////////////////
//     salary: 300,

// };


// let skills:(string|number|boolean)[] = ['js','css','ts',67,false];



//           Functions
//---------------------------------//

// type Details = {
//     name: string;
//     age: number | string;
//     salary: number;
//     getName?: () => void;
// };

// let userDetail: Details = {
//     name: 'john',
//     age: '23',
//     salary: 300,
// };

// function getUserName(userDetail:Details) {
//     return userDetail.name
// }

// getUserName(userDetail)

//              Inline
//---------------------------------//
// function getUserName({name,age}:{name:string;age:number}) {
//     return name;
// }

// getUserName({name:'John',age:20})


//              Return
//---------------------------------//

// type Details = {
//     name: string;
//     age: number | string;
//     salary: number;
//     getName?: () => void;
// };

// let userDetail: Details = {
//     name: 'john',
//     age: '23',
//     salary: 300,
// };

// function getUserName(userDetail:Details): {
//     return userDetail.name;
// }

// let newValue = getUserName(userDetail)


//          Named Types
//---------------------------------//

type StatusType = 'pending' | 'completed' | 'failed';

let currentStatus : StatusType = 'pending';

