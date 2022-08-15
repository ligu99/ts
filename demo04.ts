// 类型推论
let str813 = "123";

// 联合类型
let a813: string | number;
a813 = 1
a813 = "1"

// 类型断言
let arr813: any[] = [];
[] as string[];

// 泛型

const echo: (value: any) => any = (value) => {
    return value
}

const echoRes = echo(123);//传入的是number类型，返回了any类型

// 用泛型改
const echo2: <Type>(value: Type) => Type = (value) => {
    return value
}

const echo2Res = echo2<number>(123)

// ES5 fun写法
function join<JSPang>(first: JSPang, second: JSPang) {
    return `${first}${second}`;
}
join<string>("jspang", ".com");

// dmImageArrData: [{ name: '', url: '' ,isShow:false}],//错误写法
// dmImageArrData: [] as { name: string, url: string, isShow: boolean }[],//写法1,类型断言
// dmImageArrData: <any>[],//写法1，泛型