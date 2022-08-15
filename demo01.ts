// 基础学习
// 基础学习
// 基础学习

// 静态类型
let str1: string = "123"
let num1: number = 123;
console.log(str1, num1);

interface obj {
    name: string,
    age: number
}
const obj1: obj = {
    name: "laowang",
    age: 18
}

// 基础静态类型(number/string/boolean/void/symol/null/undefind)
const str2: string = "1";
const num2: number = 1;

// 对象静态类型
// 对象
const obj2: {
    name: string,
    age: number
} = {
    name: "xiaoli",
    age: 18
}
// 数组
const strArr: string[] = ["1", "2", "3"];
const numArr: number[] = [1, 3];
const moreArr: (string | number)[] = [1, "3"];
const aynArr: any[] = [1, "3", { a: 1, b: 2 }];

// 对象数组
const objArr: { name: string, age: number }[] = [{
    name: "laowang",
    age: 18
}, {
    name: "lao:li",
    age: 28
}]

// 类型别名写法
type objArrTye = { name: string, age: number };
const objArr2: objArrTye[] = [{
    name: "laowang",
    age: 18
}, {
    name: "lao:li",
    age: 28
}]

console.log(objArr);

// 类
class Person { }
const obj3: Person = new Person();

// 函数，定义返回值必须是string
const funObj: () => string = () => {
    return "1"
}

// 类型注解：annottion，类型推断：interface
let str3: string = "123"

const addNum: (a: number, b: number) => number = (a: number, b: number) => {
    return a + b;
}
const sum1 = addNum(1, 2)
console.log(sum1);

function addNumFun(a: number, b: number): number {
    return a + b;
}

// 函数没有返回值
const notReturn: () => void = () => {
    console.log("123");

}
// 函数执行不完
const funNever: () => never = () => {
    throw new Error();
    console.log("123");
}

// 函数参数是对象
const addNum2: ({ a, b }: { a: number, b: number }) => number = ({ a, b }) => {
    return a + b;
}
const sum2 = addNum2({ a: 3, b: 3 });
console.log(sum2);

// 元组
const yArr: [string, string, number] = ["1", "2", 3]

const yArr2: [string, string, number][] = [
    ["1", "2", 3],
    ["1", "2", 3]
]