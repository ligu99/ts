// interface 的使用
// interface 的使用
// interface 的使用

// 一般写法
const secrchRes = (name: string, age: number) => {
    age >= 18 && console.log(name + "成年了");
    age < 18 && console.log(name + "未成年");
}

secrchRes("xiaoming", 18)

interface initData {
    name: string,
    age: number,
    height?: number,//有问号，表示这个值可有可无
    [propname: string]: any//可往里面添加任何属性
}
const xiaoming22 = {
    name: "xiaomin1",
    age: 18,
    height: 160
}

const secrchRes2 = (initData: initData) => {
    initData.age >= 18 && console.log(initData.name + "成年了");
    initData.age < 18 && console.log(initData.name + "未成年");
    initData.height && console.log(initData.name + "身高：" + initData.height);
}

secrchRes2(xiaoming22)