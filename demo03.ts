// 类的使用
// 类的使用
// 类的使用

class initData3 {
    name = "小明";
    say() {
        return this.name + "hello"
    }
}

const a = new initData3();
console.log(a.say());

// 继承
class init2Data extends initData3 {
    age = 18;
    sayAge() {
        return this.age
    }
    // 重写+扩展
    say() {
        return super.say() + "!"
    }
}

const b = new init2Data();
console.log(b.say(), b.sayAge());
