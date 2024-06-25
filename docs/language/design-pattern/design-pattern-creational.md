# Creational Design Patterns

## 1. Singleton
```javascript
class Singleton {
    private static instance: Singleton;

    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public someBusinessLogic() {
        console.log("Excute some business logic")
    }
}

// new Singleton() ==> throw exception
const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
console.log("s1 === s2 =>", s1 === s2) // true
// ==> 1 Class chỉ tạo 1 instance duy nhất

s1.someBusinessLogic()
```

## 2. Fluent Interface
```javascript
class Student {
    private _name!: string | null
    private _age!: number | null

    setName(value: string) {
        this._name = value
        return this
    }

    setAge(value: number) {
        this._age = value
        return this
    }

    getInfo(): string {
        return `Student: ${this._name} - ${this._age} year(s) old `
    }
}

// ==> Sử dụng "return this" để có thể dùng 1 chuỗi câu lệnh
const newStudent = new Student().setName('Peter').setAge(20).getInfo() // Student: Peter - 20 year(s) old 
```