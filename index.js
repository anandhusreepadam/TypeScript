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
// type StatusType = 'pending' | 'completed' | 'failed';
// let currentStatus : StatusType = 'pending';
//       Function OverLoading
//---------------------------------//
// function add(num1:number|string,num2:number|string):number|string{
//     if(typeof num1 == 'string' || typeof num2 == 'string'){
//         return num1+''+num2;
//     }
//     return num1+num2;
// }
// function add(num1:number,num2:number):number;
// function add(num1:string,num2:string):string;
// function add(num1:any,num2:any):any{
//     return num1+num2;
// }
// add(2,2)
// add('2','2')
// add([],[])
// add({},{})
//           Generics
//---------------------------------//
// function getAge<T>(age:T):T{
//     return age;
// }
// getAge<string>('20')
// getAge<number>(20)
// type UserDetail={
//     name:string;
//     age:number;
// }
// type AdminDetail={
//     firstName:string;
//     role:string;
// }
// const userDetail:UserDetail={
//     name:'John',
//     age:20,
// }
// const adminDetail:AdminDetail={
//     firstName:'John',
//     role:'admin'
// }
// function getDetails<T>(details:T):T{
//     return details;
// }
// const userValue = getDetails<UserDetail>(userDetail);
// const adminValue = getDetails<AdminDetail>(adminDetail);
// adminValue
// type UserDetail={
//     name:string;
//     age:number;
// }
// type AdminDetail= UserDetail&{
//     role:string;
// }
// interface UserDetail{
//     name:string;
//     age:number;
// }
// interface AdminDetail extends UserDetail{
//     role:string;
// }
// const userDetail:UserDetail={
//     name:'John',
//     age:20,
// }
// const adminDetail:AdminDetail={
//     name:'John',
//     age:25,
//     role:'admin'
// }
// function getDetails<T>(details:T):T{
//     return details;
// }
// const userValue = getDetails<UserDetail>(userDetail);
// const adminValue = getDetails<AdminDetail>(adminDetail);
// adminValue
//             Enums
//---------------------------------//
// enum StatusType {
//     PENDING = 'pending',
//     COMPLETED = 'completed',
//     FAILED = 'failed',
// }
// function getStatus(orderId: string, status: StatusType){
//     console.log(orderId,'==',status);
// }
// getStatus('1234',StatusType.FAILED);
//            as const
//---------------------------------//
// let userName = 'John' as const;
// userName = 'John'
//         keyof / typeof
//---------------------------------//
// const StatusType = {
//     PENDING : 'pending',
//     COMPLETED : 'completed',
//     FAILED : 'failed',
// } as const;
// function getStatus(orderId: string, status: keyof typeof StatusType){
//     console.log(orderId,'==',StatusType[status]);
// }
// getStatus('1234', "COMPLETED");
//         Utitlity Type
//---------------------------------//
// type Users = {
//     readonly name: string;
//     age: number;
// };
// const userDetails: Users = {
//     name: 'John',
//     age: 23,
// }
// userDetails.name = 'Ruther';
// userDetails.age = 20;
// type Users = {
//     name: string;
//     age: number;
// };
// const userDetails: Readonly<Users> = {
//     name: 'John',
//     age: 23,
// }
// userDetails.name = 'Ruther';
// userDetails.age = 20;
// type Users = {
//     readonly name: string;
//     age?: number;
// };
// const userDetails: Users = {
//     name: 'John',
// }
// type Users = {
//     name: string;
//     age: number;
// };
// const userDetails: Partial<Users> = {
//     name: 'John',
//     age: 23,
// }
// type Users = {
//     readonly name: string;
//     age?: number;
// };
// const userDetails: Required<Users> = {
//     name: 'John',
// }
// type Users = {
//     name: string;
//     age: number;
//     salary:number;
// };
// const userDetails: Pick<Users,'name'|'age'> = {
//     name: 'John',
//     age: 23,
//     salary:20000,
// }
// type Users = {
//     name: string;
//     age: number;
//     salary:number;
// };
// const userDetails: Omit<Users,'name'> = {
//     name: 'John',
//     age: 23,
//     salary:20000,
// }
// type StatusType = 'pending'|'completed'|'failed';
// const status: Exclude<StatusType,'pending'> = 'completed'
// type Food = {
//     KFC: string;
//     PIZZA: string;
//     CHIKEN:string;
// };
// const food:Food = {
//     PIZZA:'sdajdskfj',
//     BIRIYANI:'dkljfds'
// }
// type Food = Record<string, string>
// const food:Food = {
//     PIZZA:'sdajdskfj',
//     BIRIYANI:'dkljfds'
// }
