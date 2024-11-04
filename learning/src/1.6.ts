{

    // run server:  ts-node-dev --respawn --transpile-only src/1.6.ts


//     function add (num1 : number, num2: number = 10): number{
// return num1 +num1
// // return "ajslkdjfaksd"
// }
// add(2, 2)

// object--> function --> method
// const poorUser = {
//     name:"Al Taj"
// }
// console.log(poorUser)
const isAuthenticated = "";
const result1 = isAuthenticated ?? "Guest";
const result2 = isAuthenticated ? isAuthenticated: "Guest";

// console.log({result1}, {result2})

type User = {
    name:string;
    address: {
        city:string;
        road:string;
        presentAddress:string;
        permanentAddress?: string;
    }
}

const user : User = {
    name:"Al Taj",
    address:{
        city:"Dhaka",
        road:"Titash Gash Road",
        presentAddress:"Rampura"
    },
};

const permanentAddress = user?.address.permanentAddress ?? "No Permanent Address";
// console.log({permanentAddress})

//  nllable types / unknown types

const searchName = (value: string | null)=>{
    if (value) {
        console.log("Searching");           
    }else{
        console.log("There is nothing to search")
    }
}
// searchName("null")

const getSpeerInMeterPerSecond =(value: unknown)=>{
    if(typeof value === "number"){
        const convertedSpeed = (value * 1000) / 3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`);
    }else if(typeof value === "string"){
        // const [result, unit] = value.split(" ");
        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`);
    }
}

// getSpeerInMeterPerSecond("32 ")


// const throwError = (msg: string): never=>{
//     throw new Error(msg);
// }
// throwError("mushkil se error hogaya");


// problem 
// Tasks: https://github.com/Apollo-Level2-Web-Dev/batch-4-be-a-typescript-technocrat/blob/main/practice_probelms.md

// 1)
const text : string = "Hello World, I will complete this course successfully and become a Next level Web Developer!";
// console.log(text)

// 2)
const printUserInfo =(name:string, age:number, role: "admin" | "user" | "guest" = "guest"):void=>{
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Role: ${role}`);
}
// printUserInfo("Alice", 25, "admin"); 
// printUserInfo("Bob", 30);   

type Person = {
    name: string;
    address: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
    };
    hairColor: "black" | "brown" | "blonde" | "red" | "gray" | "other";
    eyeColor: "brown" | "blue" | "green" | "hazel" | "gray" | "other";
    income: number;
    expense: number;
    hobbies: string[];
    familyMembers: {
        relation: "parent" | "sibling" | "spouse" | "child" | "other";
        name: string;
        age: number;
    }[];
    job: {
        title: string;
        company: string;
        yearsExperience: number;
    };
    skills: string[];
    maritalStatus: "single" | "married" | "divorced" | "widowed";
    friends: {
        name: string;
        contact: string;
    }[];
};
const examplePerson: Person = {
    name: "Alice Johnson",
    address: {
        street: "123 Maple St",
        city: "Springfield",
        state: "IL",
        zipCode: "62704",
    },
    hairColor: "brown",
    eyeColor: "green",
    income: 60000,
    expense: 25000,
    hobbies: ["reading", "hiking", "gardening"],
    familyMembers: [
        { relation: "parent", name: "John Johnson", age: 58 },
        { relation: "sibling", name: "Sara Johnson", age: 28 }
    ],
    job: {
        title: "Software Developer",
        company: "Tech Solutions",
        yearsExperience: 5
    },
    skills: ["TypeScript", "React", "Node.js"],
    maritalStatus: "single",
    friends: [
        { name: "Bob Smith", contact: "bob@example.com" },
        { name: "Jane Doe", contact: "jane@example.com" }
    ]
}

// console.log(examplePerson.name)

// 4) 
interface Book {
    title: string;
    author: string;
    pages: number;
    genre: string;
}

interface Magazine {
    title: string;
    publisher: string;
    issueNumber: number;
    monthly: boolean;
}
type BookOrMagazine = Book | Magazine;
type BookAndMagazine = Book & Magazine;
const example :BookOrMagazine = {
    title: "The TypeScript HandBook",
    author:"John Doe",
    pages:200,
    genre:"Programming"
}
const example1:BookOrMagazine = {
    title: "Tech Monthly",
    publisher: "Tech Publishers",
    issueNumber: 45,
    monthly: true,
    author:"John Doe"
}
// console.log(example1)

// 5)

const reverseStringFun = (text: string ) :string =>{

return text.split("").reverse().join("")
}
// console.log(reverseStringFun("Al Taj"))

// 6)

const sumNumbers = (...numbers : number[]):number =>{
console.log(numbers)
return numbers.reduce((total, num) => total +num)
}
// console.log(sumNumbers(1,2,3,4,5))

// 7) 
type AssertionType = number |string;
const assertionFun =(num1: AssertionType, num2: AssertionType):AssertionType =>{
    if (typeof num1 ==="number" && typeof num2 ==="number") {
        return num1 +num2;
    }else{
        return num1.toString() +num2.toString()
    }
}
// console.log(assertionFun(3, "3"))

// 8) 
type UserType = {
    name:string;
    email:string;
}
type AdminType ={
    adminLevel:number;
}
type IntersectionType = UserType & AdminType;
const adminUser:IntersectionType = {
name:"jon do",
email:"jon@gmail.com",
adminLevel:12
}
const intersectionFun = (interfaceUser : IntersectionType):string =>{
    return `the user name ${interfaceUser.name}, email:${interfaceUser.email} level:${interfaceUser.adminLevel}`
}
// console.log(intersectionFun(adminUser))

// 9)
type EmployeeType = {
    name:string;
    email:string;
    address?:{
        city?:string
    }
}

const getEmployeeCity =(employer:EmployeeType): string | undefined =>{
   if (employer.address?.city === undefined) {
    return undefined
   }else{
    return employer.address.city
   }
}
const cityEmployer: EmployeeType ={
    name:"Al Taj",
    email:"altaj1019@gmail.com",
    address:{
        city:"Dhaka"
    }
}
// console.log(getEmployeeCity(cityEmployer))

const employer2: EmployeeType ={
    name:"Taj",
    email:"taj1019@gmail.com",
}
// console.log(getEmployeeCity(employer2))

// 10) 
function getDisplayName(name: string | null | undefined): string {
    return name ?? "Anonymous";
  }
//   console.log(getDisplayName("Alice")); 
// console.log(getDisplayName(null));   
// console.log(getDisplayName(undefined)); 

const processData =(value : unknown) : string | number| undefined =>{
    if (typeof value ==="string") {
       return value.toUpperCase()
    }else if(typeof value === "number") {
        // return parseInt(value) * parseInt(value)
        return value *value
    }else{
        return undefined
    }
}
// console.log(processData(0))
// 12) 
const handleError =  (message: string): never =>{
    throw new Error(message)
}
// try {
//     handleError("An unexpected error occurred");
// } catch (error) {
//     console.error(error)
// }
// 13) 
const removeDuplicates = <T> (array: T[]) : T[] =>{
    const result : T[] = [];
    for (let i = 0; i < array.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < array.length; j++) {
            if (array[i] === result[j]) {
                    isDuplicate = true;
                    break; 
            }
          
        }
        if (!isDuplicate) {
            result.push(array[i]);
        }
    }
    return result;
}
const numberArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = removeDuplicates(numberArray);
// console.log(uniqueNumbers); 

// 14)

type TypeUser = {
    name: string;
    age: number;
}
const  fetchUserData = async () : Promise<TypeUser> =>{
    return new Promise (resolve =>{
        setTimeout (()=>{
            const user : TypeUser={
                name: "Al Taj",
                age:24,
            }
            resolve(user)

        }, 2000)
    }) 
}

const getUser = async ()=>{
    try {
        const user = await fetchUserData();
console.log(user)
    } catch (error) {
        console.error("Failed to fetch user data:", error);
    }
}

console.log(getUser())
// 
}